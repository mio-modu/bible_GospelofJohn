/** 제3강 · 중간 소그룹 나눔 — 존재의 무게 (선포 단락 뒤, 전체의 절반 지점) */
const { LAYOUT, HEX } = require("../../theme");

module.exports = function share(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  const s = pres.addSlide({ masterName: "SHARE", sectionTitle: "선포하심으로" });

  s.addText("소그룹 나눔 Ⅱ", { placeholder: "kicker" });
  s.addText("존재의 무게", { placeholder: "title" });

  s.addText("요즘 내 하루에서\n가장 많이 떠오르는 것은 무엇입니까?", {
    x: M, y: 2.5, w: LAYOUT.CONTENT_W, h: 1.6, margin: 0, isTextBox: true,
    fontSize: 40, bold: true, color: C.background1, lineSpacingMultiple: 1.34,
    valign: "top", objectName: "q1",
  });

  s.addShape(pres.ShapeType.rect, {
    x: M, y: 4.64, w: 2.2, h: 0.028, fill: { color: HEX.accent5 }, line: { type: "none" },
    objectName: "rule",
  });

  s.addText("그 자리에 예수님이 계시면 무엇이 달라지겠습니까?", {
    x: M, y: 5.0, w: LAYOUT.CONTENT_W, h: 0.46, margin: 0, isTextBox: true,
    fontSize: 23, color: C.accent6, valign: "top", objectName: "q2",
  });

  s.addText("요한복음 5:42  ·  하나님을 사랑하는 것이 너희 속에 없음을 알았노라", {
    x: M, y: 5.6, w: LAYOUT.CONTENT_W, h: 0.4, margin: 0, isTextBox: true,
    fontSize: 17, color: C.accent3, objectName: "ref",
  });

  s.addText("조장이 먼저  ·  1인 1분 30초  ·  전체 8분", {
    x: M, y: 6.32, w: LAYOUT.CONTENT_W, h: 0.42, margin: 0, isTextBox: true,
    fontSize: 17, bold: true, color: C.accent1, objectName: "guide",
  });

  s.addNotes(
    "선포 단락이 끝난 자리, 강의의 절반쯤에서 끊습니다. " +
      "5:42 '하나님을 사랑하는 것이 너희 속에 없음을 알았노라'와 " +
      "바로 앞에서 다룬 '존재의 무게' 이야기를 그대로 이어받는 질문입니다.\n\n" +
      "진행\n" +
      "  · 첫 번째 질문만 쓰셔도 충분합니다. 두 번째는 빨리 끝나는 조에만 던져 주십시오.\n" +
      "  · 조장이 먼저 30초. 그 길이가 그 조의 기준이 됩니다.\n" +
      "  · 8분 타이머. 전체 나눔은 1~2명, 1분으로 끊으십시오. " +
      "여기서 늘어지면 뒤의 오병이어와 생명의 떡이 밀립니다.\n\n" +
      "의도\n" +
      "  '하나님을 사랑합니까'라고 직접 물으면 답이 정해져 있습니다. 아무도 아니라고 못 합니다.\n" +
      "  그래서 돌려서 묻습니다. 요즘 내 하루에 가장 많이 떠오르는 것 — 일, 돈, 사람, 건강, 자녀.\n" +
      "  그것이 지금 내 삶의 무게중심입니다. 거기서부터 정직하게 시작하게 하십시오.\n\n" +
      "마무리 한마디\n" +
      "  영광(카보드)의 본뜻이 '무게'입니다. 영광을 돌린다는 것은 내 삶의 무게중심을 옮기는 일입니다.\n" +
      "  오늘 떠오른 그것이 나쁜 것이 아닙니다. 다만 그 위에 누가 계신가를 보자고 하십시오."
  );
};
