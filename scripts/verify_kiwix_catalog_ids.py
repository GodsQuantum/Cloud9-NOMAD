#!/usr/bin/env python3
"""Fail closed if Cloud9-NOMAD Kiwix IDs differ from official Project NOMAD.

Preserve installed_resource foreign keys even when archive URLs move.
The public upstream manifest is the authority for category/resource identities;
the community fork is free to upgrade snapshots without renaming an ID.
No ZIM archive is downloaded.
"""
import collections
import json
from pathlib import Path
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "collections/kiwix-categories.json"
UPSTREAM = ("https://raw.githubusercontent.com/Crosstalk-Solutions/project-nomad/"
            "refs/heads/main/collections/kiwix-categories.json")


def identities(doc):
    count = collections.Counter()

    def walk(node):
        if isinstance(node, dict):
            if isinstance(node.get("id"), str):
                count[node["id"]] += 1
            for value in node.values():
                walk(value)
        elif isinstance(node, list):
            for value in node:
                walk(value)
    walk(doc["categories"])
    return count


def verify(local, upstream):
    expected = identities(upstream)
    actual = identities(local)
    missing = list((expected - actual).elements())
    extra = list((actual - expected).elements())
    if missing or extra:
        raise RuntimeError(f"IDENTITY_DRIFT missing={missing} extra={extra}")
    return sum(actual.values())


if __name__ == "__main__":
    request = urllib.request.Request(UPSTREAM, headers={
        "User-Agent": "Cloud9-NOMAD-Catalog-Identity-QA/1"})
    with urllib.request.urlopen(request, timeout=25) as response:
        official = json.load(response)
    local = json.loads(MANIFEST.read_text(encoding="utf-8"))
    count = verify(local, official)
    print(f"NOMAD_UPSTREAM_KIWIX_IDENTITY_PARITY_PASS {count} identities")
