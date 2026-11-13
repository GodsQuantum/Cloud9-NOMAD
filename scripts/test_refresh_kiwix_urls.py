"""Offline contract tests for dynamic Kiwix ZIM URL refresh."""
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
import urllib.error

SOURCE = Path(__file__).with_name("refresh_kiwix_urls.py")
SPEC = importlib.util.spec_from_file_location("kiwix_refresh", SOURCE)
m = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(m)


class FakeResponse:
    status = 200

    def __init__(self, body=b"", size=120_000_000):
        self.body = body
        self.headers = {"Content-Length": str(size)}

    def read(self, *_):
        return self.body

    def __enter__(self):
        return self

    def __exit__(self, *_):
        return False


class KiwixCatalogueTests(unittest.TestCase):
    def test_exact_versioned_content_family_and_rename(self):
        choices = ["arduino.stackexchange.com_en_all_2026-07.zim",
                   "arduino.stackexchange.com_en_all_2026-10.zim"]
        self.assertEqual(m.preferred("arduino.stackexchange.com_en_all_2026-02.zim",
                                     choices), choices[1])
        self.assertIsNone(m.preferred("arduino.stackexchange.com_en_all_2026-02.zim",
                                      ["robotics.stackexchange.com_en_all_2026-10.zim"]))
        self.assertEqual(m.preferred("fas-military-medicine_en_2025-06.zim",
                                     ["irp.fas.org_en_military-medicine_2026-10.zim"]),
                         "irp.fas.org_en_military-medicine_2026-10.zim")

    def test_html_index_disallows_path_escape(self):
        parser = m.Links()
        parser.feed('<a href="../../escape.zim">bad</a>'
                    '<a href="dataset_en_all_2026-11.zim">ok</a>')
        self.assertEqual(parser.names, ["dataset_en_all_2026-11.zim"])

    def test_missing_snapshot_rewritten_once_and_id_preserved(self):
        base = m.ORIGIN + "devdocs/"
        old = base + "devdocs_en_bash_2026-01.zim"
        new = base + "devdocs_en_bash_2026-10.zim"
        data = {"resources": [{"id": "devdocs_en_bash", "version": "2026-01",
                               "size_mb": 3, "url": old},
                              {"id": "external_api", "version": "v1", "size_mb": 1,
                               "url": "https://example.com/info"}]}
        def fake(url, method="HEAD"):
            if url == old:
                raise urllib.error.HTTPError(url, 404, "gone", None, None)
            if url == base and method == "GET":
                return FakeResponse(b'<a href="devdocs_en_bash_2026-10.zim">file</a>')
            if url == new:
                return FakeResponse(size=1_200_000)
            self.fail("Unexpected HTTP request: "+url)
        with tempfile.TemporaryDirectory() as d:
            file = Path(d) / "catalog.json"
            file.write_text(json.dumps(data)+"\n")
            with patch.object(m, "remote", side_effect=fake):
                first = m.update(file, apply=True)
                self.assertEqual(len(first), 1)
                saved = json.loads(file.read_text())
                self.assertEqual(saved["resources"][0]["id"], "devdocs_en_bash")
                self.assertEqual(saved["resources"][0]["version"], "2026-10")
                self.assertEqual(saved["resources"][0]["size_mb"], 2)
                self.assertEqual(saved["resources"][0]["url"], new)
                again = m.update(file, apply=True)
                self.assertEqual(again, [])
                self.assertEqual(saved, json.loads(file.read_text()))

    def test_live_catalog_source_uses_community_manifest_with_override(self):
        text = (SOURCE.parents[1] / "admin/app/services/collection_manifest_service.ts").read_text()
        self.assertIn("process.env.NOMAD_ZIM_CATEGORIES_URL?.trim()", text)
        self.assertIn("https://raw.githubusercontent.com/GodsQuantum/Cloud9-NOMAD/refs/heads/main/collections/kiwix-categories.json", text)
        self.assertIn("zim_categories: ZIM_CATALOG_URL", text)
        self.assertNotIn("zim_categories: 'https://raw.githubusercontent.com/Crosstalk-Solutions/project-nomad", text)

    def test_fork_catalogue_keeps_official_military_medicine_id(self):
        data = json.loads((SOURCE.parents[1] / "collections/kiwix-categories.json").read_text())
        blob = json.dumps(data)
        self.assertIn('"id": "irp.fas.org_en_military-medicine"', blob)
        self.assertNotIn('"id": "fas-military-medicine_en"', blob)

    def test_upstream_identity_diff_fails_closed(self):
        import importlib.util
        path = SOURCE.with_name("verify_kiwix_catalog_ids.py")
        spec = importlib.util.spec_from_file_location("kiwix_identity", path)
        verifier = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(verifier)
        orig = {"categories": [{"id": "a"}, {"id": "a"}, {"id": "b"}]}
        changed = {"categories": [{"id": "a"}, {"id": "b"}, {"id": "c"}]}
        self.assertEqual(verifier.verify(orig, orig), 3)
        with self.assertRaisesRegex(RuntimeError, "IDENTITY_DRIFT"):
            verifier.verify(changed, orig)

    def test_http_error_does_not_mutate_catalog(self):
        url = m.ORIGIN+"devdocs/devdocs_en_bash_2026-01.zim"
        data = {"resources": [{"id": "bash", "version": "2026-01",
                               "size_mb": 3, "url": url}]}
        with tempfile.TemporaryDirectory() as d:
            file = Path(d)/"catalog.json"
            content = json.dumps(data)+"\n"
            file.write_text(content)
            with patch.object(m,"remote",side_effect=urllib.error.HTTPError(
                    url,503,"temporary server failure",None,None)):
                with self.assertRaisesRegex(RuntimeError,"HTTP 503"):
                    m.update(file,apply=True)
            self.assertEqual(file.read_text(),content)


if __name__ == "__main__":
    unittest.main()
