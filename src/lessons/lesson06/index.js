/**
 * 제6강 — 영광으로의 최후 여정 (요 13~14장)   총 44장
 *
 * 한 문장 : 끝까지 사랑하신 길이 영광의 길입니다.
 *
 * 구조 : 두 번의 일어남
 *   13:4   저녁 잡수시던 자리에서 일어나 — 수건을 두르시고 대야 앞으로
 *   14:31  일어나라 여기를 떠나자 — 십자가를 향해 문 밖으로
 *   그 사이에 남기신 것 — 본 · 계명 · 약속 · 길 · 보혜사 · 평안
 *
 * 순서
 *   00-open       여는 장 (4)   표지 · 지난 주 · 암송 13:34~35 · 지도와 한 문장
 *   10-basin      Point 1 (8)   섬김의 본 — 세족식
 *   20-betrayal   Point 2 (7)   유다의 배반과 죄의 유혹
 *   30-glory      Point 3 (4)   영광의 여정과 새계명
 *   35-share      나눔   (1)   지금 내가 씻어야 할 발
 *   40-promise    Point 4·5 (8) 근심하는 자의 약속 / 길과 진리와 생명
 *   50-obedience  Point 6 (4)   사랑과 순종의 원리
 *   60-spirit     Point 7 (4)   예수님과 성령님
 *   70-closing    마무리 (4)   남기신 것 · 한 문장 · 다음 주까지 · 맺음
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
