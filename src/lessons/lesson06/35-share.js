/** 제6강 · 중간 소그룹 나눔 — 13장을 닫고 14장으로 넘어가는 자리 */
const { LAYOUT, HEX } = require("../../theme");

module.exports = function share(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  const s = pres.addSlide({ masterName: "SHARE", sectionTitle: "영광으로의 여정과 새계명" });

  s.addText("소그룹 나눔", { placeholder: "kicker" });
  s.addText("지금 내가 씻어야 할 발", { placeholder: "title" });

  s.addText("내가 지금 발을 씻겨 주어야 할 사람은\n누구입니까?", {
    x: M, y: 2.5, w: LAYOUT.CONTENT_W, h: 1.6, margin: 0, isTextBox: true,
    fontSize: 36, bold: true, color: C.background1, lineSpacingMultiple: 1.34,
    valign: "top", objectName: "q1",
  });

  s.addShape(pres.ShapeType.rect, {
    x: M, y: 4.64, w: 2.2, h: 0.028, fill: { color: HEX.accent5 }, line: { type: "none" },
    objectName: "rule",
  });

  s.addText("그리고 내가 건너뛰고 싶은 발은 누구의 발입니까?", {
    x: M, y: 5.0, w: LAYOUT.CONTENT_W, h: 0.46, margin: 0, isTextBox: true,
    fontSize: 23, color: C.accent6, valign: "top", objectName: "q2",
  });

  s.addText("요한복음 13:14  ·  너희도 서로 발을 씻어 주는 것이 옳으니라", {
    x: M, y: 5.6, w: LAYOUT.CONTENT_W, h: 0.4, margin: 0, isTextBox: true,
    fontSize: 17, color: C.accent3, objectName: "ref",
  });

  s.addText("조장이 먼저  ·  1인 1분 30초  ·  전체 12분", {
    x: M, y: 6.32, w: LAYOUT.CONTENT_W, h: 0.42, margin: 0, isTextBox: true,
    fontSize: 17, bold: true, color: C.accent1, objectName: "guide",
  });

  s.addNotes(
    "13장을 다 닫고 14장으로 넘어가기 전에 끊는다. 전체의 절반쯤 자리다.\n" +
      "세족식과 떡 한 조각과 새 계명을 막 지나왔으니 마음이 열려 있다.\n\n" +
      "진행\n" +
      "  · 첫 질문은 쉽게 나온다. 두 번째 질문이 이 나눔의 핵심이다. " +
      "건너뛰고 싶은 발, 곧 유다의 발이 누구의 발인가.\n" +
      "  · 이름을 말하지 않게 한다. 관계만 말하면 충분하다고 미리 알려 준다.\n" +
      "  · 조장이 먼저 30초. 그 길이가 그 조의 기준이 된다.\n" +
      "  · 12분 타이머. 전체 나눔은 1~2명, 1분. " +
      "여기서 늘어지면 14장이 통째로 밀린다.\n\n" +
      "의도\n" +
      "  세족식을 듣고 나면 섬겨야 한다는 생각까지는 다 간다. " +
      "그런데 누구를 섬길 것인가에서 멈춘다.\n" +
      "  그래서 사람을 떠올리게 하는 질문으로 좁혔다. " +
      "구체적인 이름이 떠오르지 않으면 적용은 일어나지 않는다.\n" +
      "  두 번째 질문이 유다를 오늘로 끌어온다. " +
      "예수님은 한 사람도 건너뛰지 않으셨다.\n\n" +
      "마무리 한마디\n" +
      "  그날 밤 아무도 일어나지 않았다. 그래서 주님이 일어나셨다.\n" +
      "  이번 주에 먼저 일어날 자리 하나만 정하고 가자.\n\n" +
      "질문을 바꾸고 싶으면 이 두 가지를 쓸 수 있다.\n" +
      "  대안 1  나를 반대하거나 멀리하는 사람에게 떡 한 조각을 적셔 준다면, " +
      "그것은 구체적으로 무엇이겠습니까?\n" +
      "  대안 2  서로 사랑하라는 새 계명을 이번 주 한 가지 행동으로 좁힌다면 무엇입니까?"
  );
};
