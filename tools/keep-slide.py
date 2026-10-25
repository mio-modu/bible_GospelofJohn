#!/usr/bin/env python3
"""pptx 에서 슬라이드 한 장만 남긴다.

    python3 tools/keep-slide.py in.pptx 15 out.pptx

presentation.xml 의 <p:sldIdLst> 에서 대상 외 항목을 지우고, 거기 딸린
슬라이드·노트·관계·콘텐츠 타입 항목을 함께 들어낸다. 섹션 목록은 사라진
슬라이드를 가리키므로 통째로 제거한다.
"""
import re
import shutil
import sys
import zipfile

RELNS = "{http://schemas.openxmlformats.org/package/2006/relationships}"


def main(src, index, dst):
    zin = zipfile.ZipFile(src)
    pres = zin.read("ppt/presentation.xml").decode("utf-8")
    rels = zin.read("ppt/_rels/presentation.xml.rels").decode("utf-8")

    sld_ids = re.findall(r'<p:sldId [^>]*r:id="([^"]+)"[^>]*/>', pres)
    if not 1 <= index <= len(sld_ids):
        sys.exit(f"슬라이드 번호가 범위를 벗어났습니다: {index} (전체 {len(sld_ids)}장)")
    keep_rid = sld_ids[index - 1]

    rid_to_part = dict(
        re.findall(r'<Relationship Id="([^"]+)"[^>]*Target="([^"]+)"', rels)
    )
    norm = lambda t: "ppt/" + t.replace("../", "")
    keep_part = norm(rid_to_part[keep_rid])
    drop_parts = {norm(rid_to_part[r]) for r in sld_ids if r != keep_rid}

    # 남길 슬라이드가 참조하는 노트 슬라이드는 유지, 나머지 노트는 제거
    def notes_of(part):
        rp = part.replace("ppt/slides/", "ppt/slides/_rels/") + ".rels"
        if rp not in zin.namelist():
            return set()
        body = zin.read(rp).decode("utf-8")
        return {
            "ppt/notesSlides/" + t.split("/")[-1]
            for t in re.findall(r'Target="([^"]*notesSlide[^"]*)"', body)
        }

    keep_notes = notes_of(keep_part)
    drop_notes = set().union(*(notes_of(p) for p in drop_parts)) - keep_notes if drop_parts else set()

    dropped = set()
    for p in drop_parts:
        dropped.add(p)
        dropped.add(p.replace("ppt/slides/", "ppt/slides/_rels/") + ".rels")
    for n in drop_notes:
        dropped.add(n)
        dropped.add(n.replace("ppt/notesSlides/", "ppt/notesSlides/_rels/") + ".rels")

    # presentation.xml : 대상 외 sldId 와 섹션 목록 제거
    for rid in sld_ids:
        if rid != keep_rid:
            pres = re.sub(r'<p:sldId [^>]*r:id="%s"[^>]*/>' % re.escape(rid), "", pres)
    pres = re.sub(
        r'<p:extLst>(?:(?!</p:extLst>).)*?sectionLst.*?</p:extLst>', "", pres, flags=re.S
    )

    # 관계 파일 : 사라진 슬라이드로 가는 관계 제거
    for rid in sld_ids:
        if rid != keep_rid:
            rels = re.sub(r'<Relationship Id="%s"[^>]*/>' % re.escape(rid), "", rels)

    # 사라진 슬라이드만 쓰던 차트·미디어·임베딩은 고아가 되므로 함께 들어낸다
    kept_rels = [
        n for n in zin.namelist()
        if n.endswith(".rels") and n not in dropped
    ]
    referenced = set()
    for rp in kept_rels:
        base = rp.rsplit("/_rels/", 1)[0]
        for t in re.findall(r'Target="([^"]+)"', zin.read(rp).decode("utf-8")):
            if t.startswith("http"):
                continue
            parts = (base + "/" + t).split("/")
            stack = []
            for seg in parts:
                if seg == "..":
                    stack and stack.pop()
                elif seg not in ("", "."):
                    stack.append(seg)
            referenced.add("/".join(stack))
    for n in zin.namelist():
        if n in dropped:
            continue
        if n.startswith(("ppt/charts/", "ppt/media/", "ppt/embeddings/", "ppt/drawings/")) and n not in referenced:
            dropped.add(n)
            rp = n.rsplit("/", 1)[0] + "/_rels/" + n.rsplit("/", 1)[1] + ".rels"
            if rp in zin.namelist():
                dropped.add(rp)

    ct = zin.read("[Content_Types].xml").decode("utf-8")
    for p in dropped:
        ct = re.sub(r'<Override PartName="/%s"[^>]*/>' % re.escape(p), "", ct)

    with zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            if item.filename in dropped:
                continue
            if item.filename == "ppt/presentation.xml":
                zout.writestr(item, pres)
            elif item.filename == "ppt/_rels/presentation.xml.rels":
                zout.writestr(item, rels)
            elif item.filename == "[Content_Types].xml":
                zout.writestr(item, ct)
            else:
                zout.writestr(item, zin.read(item.filename))
    zin.close()


if __name__ == "__main__":
    if len(sys.argv) != 4:
        sys.exit("사용법: keep-slide.py <in.pptx> <슬라이드번호> <out.pptx>")
    main(sys.argv[1], int(sys.argv[2]), sys.argv[3])
