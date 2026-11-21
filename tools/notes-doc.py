#!/usr/bin/env python3
"""
강의 노트 뽑기 — 빌드된 pptx 에서 발표자 노트를 꺼내 읽기 좋은 문서로 만든다.

    python3 tools/notes-doc.py dist/요한복음_5강_영광이신_하나님.pptx

PowerPoint 편집 화면의 메모판은 파일에 저장된 글자 크기를 따르지 않는다.
강의하며 읽어야 하는 글이므로, 노트만 따로 큼직하게 뽑아 둔다.
태블릿이나 두 번째 화면에 띄워 놓고 보면 된다.
"""
import html
import posixpath
import re
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

A = "{http://schemas.openxmlformats.org/drawingml/2006/main}"
R = "{http://schemas.openxmlformats.org/package/2006/relationships}"


def text_of(part_xml):
    """도형 안의 <a:t> 를 문단 단위로 모은다."""
    root = ET.fromstring(part_xml)
    out = []
    for p in root.iter(A + "p"):
        line = "".join(t.text or "" for t in p.iter(A + "t"))
        # 노트 본문은 한 런 안에 줄바꿈을 품고 있다. 문단으로 펼친다.
        out.extend(line.split("\n"))
    return out


def slide_title(xml):
    """제목 자리틀의 글을 찾는다. 없으면 첫 글줄."""
    root = ET.fromstring(xml)
    best = None
    for sp in root.iter("{http://schemas.openxmlformats.org/presentationml/2006/main}sp"):
        ph = sp.find(".//{http://schemas.openxmlformats.org/presentationml/2006/main}ph")
        t = "".join(x.text or "" for x in sp.iter(A + "t")).strip()
        if not t:
            continue
        if ph is not None and ph.get("type") == "title":
            return t
        if best is None:
            best = t
    return best or ""


def notes_of(zf, slide_name):
    base = posixpath.dirname(slide_name)
    rels = f"{base}/_rels/{posixpath.basename(slide_name)}.rels"
    if rels not in zf.namelist():
        return []
    for rel in ET.fromstring(zf.read(rels)):
        if rel.get("Type", "").endswith("/notesSlide"):
            target = posixpath.normpath(posixpath.join(base, rel.get("Target")))
            lines = text_of(zf.read(target))
            # 슬라이드 번호 자리틀에서 올라온 숫자 한 줄은 버린다
            return [l for l in lines if l.strip() and not re.fullmatch(r"\d+", l.strip())]
    return []


def main(src, title=None):
    zf = zipfile.ZipFile(src)
    slides = sorted(
        (n for n in zf.namelist() if re.fullmatch(r"ppt/slides/slide\d+\.xml", n)),
        key=lambda n: int(re.search(r"(\d+)", posixpath.basename(n)).group(1)),
    )
    deck = title or Path(src).stem.replace("_", " ")

    rows = []
    for i, name in enumerate(slides, 1):
        xml = zf.read(name)
        rows.append((i, slide_title(xml), notes_of(zf, name)))

    body = []
    for num, title, notes in rows:
        if not notes:
            continue
        body.append(f'<h2><span class="n">{num}</span>{html.escape(title)}</h2>')
        for para in notes:
            if not para.strip():
                continue
            cls = ' class="in"' if para.startswith(("  ", "\t")) else ""
            body.append(f"<p{cls}>{html.escape(para.strip())}</p>")

    doc = f"""<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><title>{html.escape(deck)} 강의 노트</title>
<style>
  /* 쪽을 A5 로 줄이고 글씨를 키운다.
     화면 폭에 맞춰 보면 A4 에 같은 글씨를 넣은 것보다 1.4배쯤 크게 보인다. */
  @page {{ size: 148mm 210mm; margin: 10mm 9mm 11mm 9mm; }}
  body {{ font-family: "맑은 고딕", "Malgun Gothic", sans-serif;
          font-size: 22pt; line-height: 1.5; color: #1E2226; }}
  h1 {{ font-size: 30pt; margin: 0 0 3mm 0; }}
  .sub {{ font-size: 15pt; color: #6E767E; margin: 0 0 8mm 0; }}
  h2 {{ font-size: 25pt; margin: 8mm 0 3mm 0; padding-bottom: 2mm;
        border-bottom: 1.4pt solid #9A8046; page-break-after: avoid; }}
  h2 .n {{ display: inline-block; min-width: 14mm; color: #9A8046; }}
  p {{ margin: 0 0 3mm 0; }}
  p.in {{ margin-left: 6mm; color: #3C4248; }}
</style></head><body>
<h1>{html.escape(deck)}</h1>
<p class="sub">강의 노트 · 슬라이드별 발표자 노트</p>
{chr(10).join(body)}
</body></html>"""

    out = Path("dist") / "강의노트.html"
    out.write_text(doc, encoding="utf-8")
    print(f"{out}  ({sum(1 for r in rows if r[2])} 장 분량)")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else None)
