/**
 * 제5강 — 영광이신 하나님 (요 11~12장)
 *
 * 한 문장 : 하나님의 영광은 무덤을 지나서 드러납니다.
 *
 * 구조 : 두 개의 무덤
 *   11장 — 무덤에서 나오는 사람 (나사로)
 *   12장 — 무덤을 향해 가시는 분 (예수님)
 *   경첩 — 향유 (나사로의 장례는 풀리고, 예수님의 장례가 준비된다)
 *
 * 순서 : 여는 장(지도 포함) → Part 1 Point 1~7 → 소그룹 나눔Ⅱ
 *        → Part 2 Point 8~12 → 마무리
 *
 * 원칙 : 슬라이드에는 핵심 문구만, 강의 설명은 전부 발표자 노트에.
 *        구간마다 말씀만 크게 띄우는 장(verse)을 넣어 호흡을 끊는다.
 */
module.exports = {
  id: "05",
  title: "영광이신 하나님",
  fileName: "요한복음_5강_영광이신_하나님.pptx",
  subject: "요한복음 제5과 · 요한복음 11~12장",
  palette: "slate",
  notesSize: 72, // 메모판이 약 50% 로 그려서, 화면에 35pt 쯤으로 보이게 하려면 이 정도 // 메모판에서 강의하며 읽는 크기
  layoutOpts: { titleSize: 38, footer: "요한복음 OBC · 제5강 영광이신 하나님" },
  parts: [
    require("./00-open"),
    require("./10-tomb-before"),
    require("./15-share"),
    require("./20-tomb-toward"),
    require("./30-closing"),
  ],
};
