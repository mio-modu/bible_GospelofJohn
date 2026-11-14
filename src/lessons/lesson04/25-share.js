/** 제4강 · 중간 소그룹 나눔 — 돌을 내려놓다 (8장 용서 단락 뒤) */
const { LAYOUT, HEX } = require("../../theme");

module.exports = function share(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  const s = pres.addSlide({ masterName: "SHARE", sectionTitle: "용서하시는 예수님" });

  s.addText("소그룹 나눔 Ⅱ", { placeholder: "kicker" });
  s.addText("내려놓은 돌", { placeholder: "title" });

  s.addText("요즘 내가 손에 들고 있는\n돌 하나는 무엇입니까?", {
    x: M, y: 2.5, w: LAYOUT.CONTENT_W, h: 1.6, margin: 0, isTextBox: true,
    fontSize: 40, bold: true, color: C.background1, lineSpacingMultiple: 1.34,
    valign: "top", objectName: "q1",
  });

  s.addShape(pres.ShapeType.rect, {
    x: M, y: 4.64, w: 2.2, h: 0.028, fill: { color: HEX.accent5 }, line: { type: "none" },
    objectName: "rule",
  });

  s.addText("이름은 말하지 않습니다. 그 마음만 꺼내 보십시오.", {
    x: M, y: 5.0, w: LAYOUT.CONTENT_W, h: 0.46, margin: 0, isTextBox: true,
    fontSize: 23, color: C.accent6, valign: "top", objectName: "q2",
  });

  s.addText("요한복음 8:7  ·  너희 중에 죄 없는 자가 먼저 돌로 치라", {
    x: M, y: 5.6, w: LAYOUT.CONTENT_W, h: 0.4, margin: 0, isTextBox: true,
    fontSize: 17, color: C.accent3, objectName: "ref",
  });

  s.addText("조장이 먼저  ·  1인 1분 30초  ·  전체 8분", {
    x: M, y: 6.32, w: LAYOUT.CONTENT_W, h: 0.42, margin: 0, isTextBox: true,
    fontSize: 17, bold: true, color: C.accent1, objectName: "guide",
  });

  s.addNotes(
    "용서 단락이 끝난 자리, 강의의 절반쯤에서 끊습니다.\n\n" +
      "진행\n" +
      "  · '이름은 말하지 않습니다'를 반드시 먼저 말해 주십시오. 그 한마디가 입을 열게 합니다.\n" +
      "  · 조장이 먼저 30초. 그 길이가 그 조의 기준이 됩니다.\n" +
      "  · 8분 타이머. 전체 나눔은 1~2명, 1분으로 끊으십시오. " +
      "여기서 늘어지면 뒤의 9장·10장이 통째로 밀립니다.\n\n" +
      "의도\n" +
      "  '누구를 정죄하십니까'라고 물으면 아무도 손을 들지 않습니다.\n" +
      "  '손에 든 돌'로 물으면 다릅니다. 누구에게나 하나쯤 있고, 자기만 압니다.\n" +
      "  그리고 9절처럼 어른부터 먼저 내려놓았다는 점을 기억하게 하십시오. " +
      "오래 살수록 자기 죄를 더 아는 법입니다.\n\n" +
      "마무리 한마디\n" +
      "  그 자리에서 돌을 던질 자격이 있는 유일한 분이 남으셨습니다. " +
      "그런데 그분이 던지지 않으셨습니다.\n" +
      "  오늘 그 돌을 내려놓고 가시라고 권해 주십시오."
  );
};
