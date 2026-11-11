#!/usr/bin/env python3
"""Fail closed on sensitive values in added public lines. No deployment data."""
import re
import subprocess
import sys

# Build sensitive literals from fragments so this scanner does not trigger on itself.
names = ["a" + "rezki", "chou" + "gar", "kech" + "idi", "fe" + "lla"]
domains = ["home" + ".arpa", "a" + "rezki" + "chou" + "gar.com"]
paths = ["/home/" + "a" + "rezki", "/srv/" + "lxc/", "/srv/" + "storage/"]
patterns = [
    re.compile(re.escape(x), re.I)
    for x in names + domains + paths
]
patterns += [
    re.compile(r"192[.]168[.]1[.](?:205|218|36|50)"),
    re.compile("-----" + "BEGIN" + r".*" + "PRIVATE KEY"),
    re.compile(r"ghp_" + r"[A-Za-z0-9]{25}"),
    re.compile(r"github_pat_" + r"[A-Za-z0-9_]{30}"),
    re.compile(r"sk-(?:proj-)?[A-Za-z0-9_-]{25}"),
]
args = sys.argv[1:] if len(sys.argv) == 3 else ["HEAD^", "HEAD"]
result = subprocess.run(
    ["git", "diff", "--no-ext-diff", "--unified=0", *args, "--", ".", ":!admin/public/*"],
    check=True, capture_output=True, text=True,
)
source = ""
hits = []
for line in result.stdout.splitlines():
    if line.startswith("+++ b/"):
        source = line[6:]
    elif line.startswith("+") and not line.startswith("+++"):
        if any(p.search(line[1:]) for p in patterns):
            hits.append(source)
if hits:
    print("PRIVATE_DEPLOYMENT_IDENTIFIERS_DETECTED_IN", sorted(set(hits)))
    raise SystemExit(1)
print("PUBLIC_DIFF_PRIVACY_SCAN_PASS")
