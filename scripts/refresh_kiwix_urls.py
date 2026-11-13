#!/usr/bin/env python3
"""Refresh unavailable Kiwix ZIM snapshots from the publisher's directory.

Only manifest URLs returning HTTP 404 are replaced. The official directory
index must provide an unambiguous exact-content-family newer snapshot.
No ZIM payload is downloaded, no local installs are touched. This runs
on demand, not as a new daemon or background poller.
"""
import argparse
import html.parser
import json
import math
import os
import stat
from pathlib import Path
import re
import tempfile
import urllib.error
import urllib.parse
import urllib.request

DEFAULT = Path(__file__).resolve().parents[1] / "collections/kiwix-categories.json"
ORIGIN = "https://download.kiwix.org/zim/"
FILE = re.compile(r"^[A-Za-z0-9_.+-]+_\d{4}-\d{2}[a-z]?\.zim$")
DATE = re.compile(r"_(\d{4}-\d{2})[a-z]?\.zim$")
# Publisher renamed this archived collection; preserve the original manifest ID.
RENAMED = {"fas-military-medicine_en": "irp.fas.org_en_military-medicine"}


class Links(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.names = []

    def handle_starttag(self, tag, attrs):
        if tag == "a":
            for key, value in attrs:
                if key == "href":
                    name = urllib.parse.unquote(value)
                    if FILE.fullmatch(name):
                        self.names.append(name)


def remote(url, method="HEAD"):
    request = urllib.request.Request(url, method=method,
                                     headers={"User-Agent": "NOMAD-Kiwix-Catalog/1.0"})
    return urllib.request.urlopen(request, timeout=25)


def status(url):
    try:
        with remote(url) as response:
            if response.status != 200:
                raise RuntimeError(f"Unexpected HTTP {response.status} for {url}")
            return True, int(response.headers.get("Content-Length", "0"))
    except urllib.error.HTTPError as exc:
        if exc.code == 404:
            return False, 0
        raise RuntimeError(f"HTTP {exc.code} for {url}") from exc


def content_family(name):
    stem = re.sub(r"_\d{4}-\d{2}[a-z]?\.zim$", "", name)
    if stem == name:
        raise ValueError(f"Unversioned Kiwix snapshot {name}")
    return RENAMED.get(stem, stem)


def preferred(name, names):
    stem = content_family(name)
    matches = sorted(x for x in names
                     if re.fullmatch(re.escape(stem) +
                                     r"_\d{4}-\d{2}[a-z]?\.zim", x))
    return matches[-1] if matches else None


def resources(value):
    if isinstance(value, dict):
        if isinstance(value.get("url"), str):
            yield value
        for entry in value.values():
            yield from resources(entry)
    elif isinstance(value, list):
        for entry in value:
            yield from resources(entry)


def directory_names(folder, cache):
    if folder not in cache:
        with remote(folder, "GET") as response:
            if response.status != 200:
                raise RuntimeError(f"Cannot list {folder}")
            body = response.read(2_000_001)
            if len(body) > 2_000_000:
                raise RuntimeError(f"Unexpectedly large index {folder}")
        parser = Links()
        parser.feed(body.decode("utf-8", "replace"))
        cache[folder] = parser.names
    return cache[folder]


def update(catalog, apply=False):
    doc = json.loads(catalog.read_text(encoding="utf-8"))
    cache = {}
    changes = []
    errors = []
    for item in resources(doc):
        url = item["url"]
        if not url.startswith(ORIGIN) or not url.endswith(".zim"):
            continue
        valid, _ = status(url)
        if valid:
            continue
        folder, name = url.rsplit("/", 1)
        folder += "/"
        try:
            chosen = preferred(name, directory_names(folder, cache))
            if chosen is None:
                raise RuntimeError(f"No identical content family replacement for {name}")
            new_url = folder + chosen
            available, content_length = status(new_url)
            if not available or content_length <= 0:
                raise RuntimeError(f"Candidate unavailable or missing content size: {new_url}")
            version = DATE.search(chosen)
            if version is None:
                raise RuntimeError(f"No version in {chosen}")
            if not all(k in item for k in ("id", "version", "size_mb")):
                raise RuntimeError(f"Manifest shape changed for {name}")
            item["url"] = new_url
            item["version"] = version.group(1)
            item["size_mb"] = math.ceil(content_length / (1024 ** 2))
            changes.append((item["id"], url, new_url))
        except Exception as exc:
            errors.append(str(exc))
    if errors:
        raise RuntimeError("Refusing partial catalogue rewrite: " + "; ".join(errors))
    for ident, old, new in changes:
        print(f"KIWIX_SNAPSHOT_REFRESH {ident}: {old} -> {new}", flush=True)
    if apply and changes:
        original = catalog.stat()
        fd, temp = tempfile.mkstemp(prefix=".kiwix-", dir=catalog.parent)
        try:
            with os.fdopen(fd, "w", encoding="utf-8") as output:
                json.dump(doc, output, ensure_ascii=False, indent=2)
                output.write("\n")
                output.flush()
                os.fsync(output.fileno())
            os.chmod(temp, stat.S_IMODE(original.st_mode))
            os.chown(temp, original.st_uid, original.st_gid)
            os.replace(temp, catalog)
        finally:
            if os.path.exists(temp):
                os.unlink(temp)
    print(f"KIWIX_CATALOGUE_VERIFIED {len(changes)} replacements; apply={apply}")
    return changes


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--catalog", type=Path, default=DEFAULT)
    parser.add_argument("--apply", action="store_true",
                        help="Write only after all missing snapshots have safe replacements")
    arguments = parser.parse_args()
    update(arguments.catalog, arguments.apply)
