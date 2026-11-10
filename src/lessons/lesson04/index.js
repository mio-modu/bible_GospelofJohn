/**
 * 제4강 — 영광이신 예수님 (요 7~10장)
 *
 * 순서 : 여는 장 → 생수(7장) → 용서(8:1~11) → 소그룹 나눔Ⅱ(절반 지점)
 *        → 빛(8:12~30) → 참 자녀(8:31~59) → 보게 하심(9장) → 선한 목자(10장) → 마무리
 *
 * 이 덱의 원칙
 *   · 슬라이드에는 핵심 문구만, 강의 설명은 전부 발표자 노트에.
 *   · 구간마다 말씀만 크게 띄우는 장(verse)을 넣어 호흡을 끊는다.
 *   · 팔레트는 3강과 같은 'slate'.
 */
module.exports = {
  id: "04",
  title: "영광이신 예수님",
  fileName: "요한복음_4강_영광이신_예수님.pptx",
  subject: "요한복음 제4과 · 요한복음 7~10장",
  palette: "slate",
  notesSize: 24,
  layoutOpts: { titleSize: 38, footer: "요한복음 OBC · 제4강 영광이신 예수님" },
  parts: [
    require("./00-open"),
    require("./10-living-water"),
    require("./20-forgiveness"),
    require("./25-share"),
    require("./30-light"),
    require("./40-truth-freedom"),
    require("./50-sight"),
    require("./60-shepherd"),
    require("./70-closing"),
  ],
};
