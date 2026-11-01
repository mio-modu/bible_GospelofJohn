/** 제2강 · 중간 소그룹 나눔 — 「와서 보라」 (첫 제자들 뒤) */
const { LAYOUT } = require("../../theme");

module.exports = function share(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  const s = pres.addSlide({ masterName: "SHARE", sectionTitle: "첫 제자들" });

  s.addText("소그룹 나눔 Ⅱ", { placeholder: "kicker" });
  s.addText("와서 보라", { placeholder: "title" });

  s.addText("나를 지금 이 자리까지\n데려와 준 사람은 누구입니까?", {
    x: M, y: 2.5, w: LAYOUT.CONTENT_W, h: 1.6, margin: 0, isTextBox: true,
    fontSize: 40, bold: true, color: C.background1, lineSpacingMultiple: 1.34,
    valign: "top", objectName: "q1",
  });

  s.addShape(pres.ShapeType.rect, {
    x: M, y: 4.64, w: 2.2, h: 0.028, fill: { color: "C19A4B" }, line: { type: "none" },
    objectName: "rule",
  });

  s.addText("그 사람이 한 것은 설득이었습니까,  “와서 보라”였습니까?", {
    x: M, y: 5.0, w: LAYOUT.CONTENT_W, h: 0.46, margin: 0, isTextBox: true,
    fontSize: 23, color: C.accent6, valign: "top", objectName: "q2",
  });

  s.addText("요한복음 1:46  ·  빌립이 나다나엘에게", {
    x: M, y: 5.6, w: LAYOUT.CONTENT_W, h: 0.4, margin: 0, isTextBox: true,
    fontSize: 17, color: C.accent3, objectName: "ref",
  });

  s.addText("조장이 먼저  ·  1인 1분 30초  ·  전체 8분", {
    x: M, y: 6.32, w: LAYOUT.CONTENT_W, h: 0.42, margin: 0, isTextBox: true,
    fontSize: 17, bold: true, color: C.accent1, objectName: "guide",
  });

  s.addNotes(
    "첫 제자들 단락이 끝난 자리에서 끊습니다. 안드레가 베드로를, 빌립이 나다나엘을 " +
      "데려온 장면 바로 뒤이기 때문에 질문이 억지스럽지 않습니다.\n\n" +
      "진행\n" +
      "  · 질문은 첫 번째 것 하나로 충분합니다. 두 번째는 이야기가 빨리 끝나는 조에만 던져 주십시오.\n" +
      "  · 조장이 먼저 30초로 답하게 하십시오. 그 길이가 그 조의 기준이 됩니다.\n" +
      "  · 8분 타이머. 전체 나눔은 1~2명, 1분으로 끊으십시오. " +
      "여기서 늘어지면 뒤의 니고데모 단락이 밀립니다.\n\n" +
      "의도\n" +
      "  이번이 2주차라 조가 아직 서먹합니다. 자기 바닥을 꺼내는 질문은 이릅니다. " +
      "이 질문은 누구나 답할 수 있고, 답하는 동안 자기 신앙 이력이 자연스럽게 소개됩니다. " +
      "지난주 자기소개의 연장선이 되면서 분위기가 따뜻해집니다.\n\n" +
      "마무리 한마디\n" +
      "  빌립은 나다나엘과 논쟁하지 않았습니다. '와서 보라' 한마디였습니다. " +
      "전도는 설득이 아니라 소개입니다. 나머지는 예수님이 하십니다.\n" +
      "  그리고 오늘 떠올린 그 사람에게, 이번 주에 연락 한 번 해 보시라고 권해 주십시오."
  );
};
