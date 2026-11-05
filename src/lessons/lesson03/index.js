/**
 * 제3강 — 영광을 드러내시다 (요 4:43~6:71)
 *
 * 순서 : 여는 장 → 고치심 → 선포하심 → 소그룹 나눔Ⅱ(절반 지점)
 *        → 표적 → 가르치심 → 마무리
 *
 * 이 덱의 원칙 : 슬라이드에는 핵심 문구만, 강의 설명은 전부 발표자 노트에.
 * 팔레트는 'slate' — 뉴트럴 오프화이트 바탕에 딥 그래파이트와 샴페인 골드.
 * 따뜻한(갈색) 기운을 빼고 밝으면서 모던하게 간다.
 */
module.exports = {
  id: "03",
  title: "영광을 드러내시다",
  fileName: "요한복음_3강_영광을_드러내시다.pptx",
  subject: "요한복음 제3과 · 요한복음 4:43~6:71",
  palette: "slate",
  notesSize: 24, // 강의 중 메모판에서 읽을 수 있는 크기
  layoutOpts: { titleSize: 38, footer: "요한복음 OBC · 제3강 영광을 드러내시다" },
  parts: [
    require("./00-open"),
    require("./10-healing"),
    require("./20-proclaim"),
    require("./25-share"),
    require("./30-signs"),
    require("./40-teaching"),
    require("./50-closing"),
  ],
};
