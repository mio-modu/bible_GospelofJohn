/** 제4강 · 마무리 */
const { LAYOUT } = require("../../theme");
const { rows, statement, cardGrid, scripture } = require("../../components");

module.exports = function closing(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  pres.addSection({ title: "마무리" });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: "마무리" });

  // ── 4강 한 장 정리
  {
    const s = S("CONTENT");
    s.addText("4강 한 장 정리", { placeholder: "title" });
    rows(
      s,
      pres,
      [
        { tag: "생수", head: "명절 끝날 큰 날 — 목마르거든 내게로 와서 마시라", body: "" },
        { tag: "영광", head: "자기 영광을 구하면 하나님의 뜻을 알 수 없습니다", body: "" },
        { tag: "공의", head: "외모로 판단하지 말고 공의롭게 판단하라", body: "" },
        { tag: "용서", head: "나도 너를 정죄하지 아니하노니 — 가서 다시는", body: "" },
        { tag: "빛", head: "나는 세상의 빛이니 · 나는 항상 기뻐하시는 일을 행하므로", body: "" },
        { tag: "자유", head: "내 말에 거하면 — 진리가 너희를 자유롭게 하리라", body: "" },
        { tag: "시력", head: "보지 못하는 자는 보게, 본다 하는 자는 맹인이 되게", body: "" },
        { tag: "목자", head: "이름을 각각 불러 · 스스로 버리노라 · 나와 아버지는 하나", body: "" },
      ],
      { y: 1.8, headSize: 23, tagW: 1.5, gap: 0.06 }
    );
    s.addNotes(
      "4과 전체를 한 장으로 되짚습니다.\n\n" +
        "네 장(7~10장)이 하나의 질문을 향합니다 — 이분은 누구신가.\n" +
        "그리고 그 선언이 거듭될수록 사람들이 갈리고, 돌이 올라갑니다.\n\n" +
        "오늘의 큰 대조 하나를 다시 짚어 주십시오 — " +
        "자기 영광을 구하는 사람과 하나님의 영광을 구하신 분.\n" +
        "7장의 유대인들도, 9장의 바리새인들도, 10장의 삯꾼도 전부 같은 뿌리입니다."
    );
  }

  // ── 한 문장으로
  {
    const s = S("CONTENT_DARK");
    s.addText("한 문장으로", { placeholder: "title" });
    statement(s, pres, {
      y: 2.4, size: 40, dark: true,
      text: "본다고 하는 사람은 눈이 멀고\n목마르다는 사람이 마십니다",
      sub: "자격이 아니라 갈증이 조건입니다",
    });
    s.addNotes(
      "오늘 네 장을 한 문장으로 묶습니다.\n\n" +
        "7장 — '누구든지 목마르거든 내게로 와서 마시라.' 자격이 아니라 갈증이 조건입니다.\n" +
        "9장 — '본다고 하니 너희 죄가 그대로 있느니라.' 안다는 것이 가장 큰 장벽이었습니다.\n\n" +
        "바리새인들은 목마르지 않았습니다. 가진 것이 많았고, 안다고 생각했습니다. " +
        "그래서 생수 앞에서 돌을 들었습니다.\n\n" +
        "맹인은 가진 것이 없었습니다. 아는 것도 없었습니다. " +
        "'한 가지 아는 것은 내가 맹인으로 있다가 지금 보는 그것이니이다.' " +
        "그 한 가지로 충분했습니다.\n\n" +
        "기도로 마치시되, 오늘 나눔에서 나온 '내려놓은 돌'을 한 번 더 언급해 주십시오."
    );
  }

  // ── 다음 주까지
  {
    const s = S("CONTENT");
    s.addText("다음 주까지", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "1", head: "4강 소감문", body: "가장 마음에 남은 한 장면", foot: "제출 : 다음 주" },
        { tag: "2", head: "제5과 예습", body: "교재 질문 미리 답하기", foot: "" },
        { tag: "3", head: "통독", body: "요한복음 7~10장 다시", foot: "권장" },
        { tag: "4", head: "암송", body: "요한복음 8:31~32", foot: "필수" },
      ],
      { y: 1.9, h: 2.9, cols: 4, headSize: 23, bodySize: 18, footSize: 16 }
    );
    scripture(s, pres, {
      x: M, y: 5.1, w: LAYOUT.CONTENT_W, h: 1.6, dark: false, fontSize: 23,
      text: "너희가 내 말에 거하면 참으로 내 제자가 되고 진리를 알지니 진리가 너희를 자유롭게 하리라",
      ref: "요한복음 8:31~32 — 이번 주 암송 구절",
    });
    s.addNotes(
      "소감문은 분량보다 한 장면에 집중하게 하십시오.\n\n" +
        "8:31~32는 반드시 암송하게 하십시오. 오늘 시작할 때 읽었던 구절입니다. " +
        "다음 주 시작할 때 함께 외우고 시작하면 좋습니다.\n\n" +
        "소그룹에 남길 질문 하나 — " +
        "'이번 주, 나는 목마른 사람입니까, 안다고 하는 사람입니까?'"
    );
  }

  // ── 맺음
  {
    const s = pres.addSlide({ masterName: "COVER", sectionTitle: "마무리" });
    s.addText("제4강을 마칩니다", { placeholder: "kicker" });
    s.addText("영광이신 예수님", { placeholder: "title" });
    s.addText(
      [
        { text: "“내가 그들에게 영생을 주노니 영원히 멸망하지 아니할 것이요", options: { italic: true, breakLine: true } },
        { text: "또 그들을 내 손에서 빼앗을 자가 없느니라”", options: { italic: true, breakLine: true } },
        { text: "요한복음 10:28", options: { bold: true, fontSize: 17 } },
      ],
      { placeholder: "body" }
    );
    s.addNotes("10:28을 함께 읽고 기도로 마무리하십시오.");
  }
};
