/**
 * 제6강 — 영광으로의 최후 여정 (요 13~14장)
 *
 * 한 문장 : 끝까지 사랑하신 길이 영광의 길입니다.
 *
 * 구조 : 두 번의 일어남
 *   13:4   저녁 잡수시던 자리에서 일어나 — 수건을 두르시고 대야 앞으로
 *   14:31  일어나라 여기를 떠나자 — 십자가를 향해 문 밖으로
 *   그 사이에 남기신 것 — 본 · 계명 · 약속 · 길 · 보혜사 · 평안
 *
 * 순서 : 여는 장(지도 포함)
 *        → Part 1 (13장)  Point 1 섬김의 본 · Point 2 유다의 배반 · Point 3 영광과 새계명
 *        → 소그룹 나눔
 *        → Part 2 (14장)  Point 4 근심하는 자의 약속 · Point 5 길과 진리와 생명
 *                         Point 6 사랑과 순종 · Point 7 예수님과 성령님
 *        → 마무리
 *
 * 원칙 : 슬라이드에는 핵심 문구만, 강의 설명은 전부 발표자 노트에.
 *        구간마다 말씀만 크게 띄우는 장(verse)을 넣어 호흡을 끊는다.
 */
module.exports = {
  id: "06",
  title: "영광으로의 최후 여정",
  fileName: "요한복음_6강_영광으로의_최후_여정.pptx",
  subject: "요한복음 제6과 · 요한복음 13~14장",
  palette: "slate",
  notesSize: 28, // 슬라이드 노트 보기·발표자 보기 기준. 편집 화면 메모판은 이 값을 무시한다
  layoutOpts: { titleSize: 38, footer: "요한복음 OBC · 제6강 영광으로의 최후 여정" },
  parts: [
    require("./00-open"),
    require("./10-basin"),
    require("./20-betrayal"),
    require("./30-glory"),
    require("./35-share"),
    require("./40-promise"),
    require("./50-obedience"),
    require("./60-spirit"),
    require("./70-closing"),
  ],
};
