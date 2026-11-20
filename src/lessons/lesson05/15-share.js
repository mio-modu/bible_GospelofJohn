/** 제5강 · 중간 소그룹 나눔 — 나흘이 지난 자리 (돌을 옮겨 놓으라 뒤) */
const { LAYOUT, HEX } = require("../../theme");

module.exports = function share(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  const s = pres.addSlide({ masterName: "SHARE", sectionTitle: "무덤 앞에 서신 예수님" });

  s.addText("소그룹 나눔 Ⅱ", { placeholder: "kicker" });
  s.addText("나흘이 지난 자리", { placeholder: "title" });

  s.addText("내 삶에서 이미 나흘이 지난 것 같은,\n늦었다고 여겨지는 자리는 어디입니까?", {
    x: M, y: 2.5, w: LAYOUT.CONTENT_W, h: 1.6, margin: 0, isTextBox: true,
    fontSize: 36, bold: true, color: C.background1, lineSpacingMultiple: 1.34,
    valign: "top", objectName: "q1",
  });

  s.addShape(pres.ShapeType.rect, {
    x: M, y: 4.64, w: 2.2, h: 0.028, fill: { color: HEX.accent5 }, line: { type: "none" },
    objectName: "rule",
  });

  s.addText("그 자리에서 내가 옮겨야 할 돌은 무엇이겠습니까?", {
    x: M, y: 5.0, w: LAYOUT.CONTENT_W, h: 0.46, margin: 0, isTextBox: true,
    fontSize: 23, color: C.accent6, valign: "top", objectName: "q2",
  });

  s.addText("요한복음 11:40  ·  네가 믿으면 하나님의 영광을 보리라", {
    x: M, y: 5.6, w: LAYOUT.CONTENT_W, h: 0.4, margin: 0, isTextBox: true,
    fontSize: 17, color: C.accent3, objectName: "ref",
  });

  s.addText("조장이 먼저  ·  1인 1분 30초  ·  전체 10분", {
    x: M, y: 6.32, w: LAYOUT.CONTENT_W, h: 0.42, margin: 0, isTextBox: true,
    fontSize: 17, bold: true, color: C.accent1, objectName: "guide",
  });

  s.addNotes(
    "11장의 감정적 정점 바로 뒤, 전체의 절반쯤에서 끊습니다.\n" +
      "눈물과 '나사로야 나오라'를 막 보고 난 직후라 마음이 열려 있습니다.\n\n" +
      "진행\n" +
      "  · '나흘'이라는 숫자가 있어서 질문이 손에 잡힙니다. " +
      "본문을 한 번 더 짚고 던지십시오 — 마르다도 '벌써 나흘이 되었으매' 했습니다.\n" +
      "  · 조장이 먼저 30초. 그 길이가 그 조의 기준이 됩니다.\n" +
      "  · 10분 타이머. 전체 나눔은 1~2명, 1분으로 끊으십시오. " +
      "여기서 늘어지면 12장이 통째로 밀립니다.\n\n" +
      "의도\n" +
      "  '늦었다고 느끼는 것'은 누구나 하나쯤 있습니다. " +
      "자녀, 관계, 건강, 진로, 오래된 기도 제목.\n" +
      "  그런데 예수님은 늦으신 게 아니라 기다리셨습니다. " +
      "사흘 안에 가셨으면 아무도 믿지 않았을 겁니다.\n" +
      "  두 번째 질문은 적용입니다. 돌 옮기는 일은 누구나 할 수 있는 일이었습니다. " +
      "지금 내가 할 수 있는 작은 순종 하나를 찾게 하십시오.\n\n" +
      "마무리 한마디\n" +
      "  나흘은 사람에게는 끝난 시간이지만 주님에게는 시작하기 좋은 시간이었습니다.\n" +
      "  그리고 돌을 옮기는 일은 우리가 했고, 살리시는 일은 그분이 하셨습니다."
  );
};
