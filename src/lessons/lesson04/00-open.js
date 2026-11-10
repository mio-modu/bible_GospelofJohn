/** 제4강 · 여는 장 */
const { LAYOUT } = require("../../theme");
const { rows, statement, keyline, verse } = require("../../components");

module.exports = function open(pres) {
  const C = pres.SchemeColor;
  pres.addSection({ title: "여는 장" });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: "여는 장" });

  // ── 표지
  {
    const s = S("COVER");
    s.addText("O B C   요한복음  ·  제 4 강", { placeholder: "kicker" });
    s.addText("영광이신 예수님", { placeholder: "title" });
    s.addText(
      [
        { text: "요한복음 7 ~ 10장", options: { bold: true, breakLine: true } },
        { text: "BEE Korea 교재 제4과", options: { fontSize: 17, color: C.accent6, breakLine: true } },
        { text: "박성은 목사", options: { fontSize: 17, color: C.accent6 } },
      ],
      { placeholder: "body" }
    );
    s.addNotes(
      "제4과 '영광이신 예수님'입니다. 요한복음 7~10장, 네 장을 한 번에 봅니다.\n\n" +
        "3과가 '영광을 드러내시다'였다면 4과는 '영광이신 예수님'입니다. " +
        "드러내시는 분에서, 그분 자신이 영광이시라는 데로 옮겨갑니다.\n\n" +
        "오늘 예수님이 자신을 네 가지로 부르십니다 — 생수, 빛, 자유케 하는 분, 선한 목자.\n" +
        "그리고 그 선언마다 유대인들의 반발이 커집니다. 8장 끝에서는 돌을 들고, " +
        "10장 끝에서도 돌을 듭니다. 십자가가 가까워지고 있습니다."
    );
  }

  // ── 지난 주
  {
    const s = S("CONTENT_DARK");
    s.addText("지난 주", { placeholder: "title" });
    statement(s, pres, {
      y: 2.1, size: 36, dark: true,
      text: "떡을 구하면 떠나고\n말씀을 구하면 남습니다",
      sub: "38년 된 병자 · 생명과 심판 · 오병이어 · 나는 생명의 떡이다",
      ref: "요한복음 4:43~6:71",
    });
    keyline(s, pres, { y: 5.7, h: 0.9, text: "“주여 영생의 말씀이 주께 있사오니”", fontSize: 27 });
    s.addNotes(
      "복습은 짧게. 3과의 마지막 장면만 떠올리게 하십시오.\n\n" +
        "오병이어를 먹은 오천 명이 다음 날 쫓아왔지만, " +
        "'내 살을 먹으라'는 말씀 앞에서 많은 제자가 떠났습니다(6:66).\n" +
        "'너희도 가려느냐' 물으시자 베드로가 답했습니다 — '주여 영생의 말씀이 주께 있사오니.'\n\n" +
        "오늘 7장은 그 사건에서 약 여섯 달 뒤입니다. 그 사이에 무슨 일이 있었을까요. " +
        "요한은 한 줄도 쓰지 않았습니다. 첫 장면에서 그 이야기부터 하겠습니다."
    );
  }

  // ── 암송구절
  {
    const s = S("CONTENT_DARK");
    s.addText("암송구절", { placeholder: "title" });
    verse(s, pres, {
      y: 2.0, ref: "요한복음 8:31~32", size: 29,
      text: "“너희가 내 말에 거하면\n참으로 내 제자가 되고\n진리를 알지니\n진리가 너희를 자유롭게 하리라”",
    });
    s.addNotes(
      "이번 주 암송 구절입니다. 시작할 때 한 번, 8장 들어갈 때 한 번, 마칠 때 한 번 읽으십시오.\n\n" +
        "세 단계가 그대로 들어 있습니다 — 거하면 / 제자가 되고 / 진리를 알고 / 자유케 된다.\n" +
        "오늘 Point 8에서 이 구절을 자세히 다룹니다. 여기서는 소리 내어 한 번 읽기만 하십시오."
    );
  }

  // ── 오늘의 지도
  {
    const s = S("CONTENT");
    s.addText("오늘, 예수님이 자신을 이렇게 부르십니다", { placeholder: "title" });
    rows(
      s,
      pres,
      [
        { tag: "1", head: "생수이신 예수님", body: "초막절 · 하나님의 것으로 가르치심 · 생수의 강    7장" },
        { tag: "2", head: "용서하시는 예수님", body: "간음하다 잡힌 여인    8:1~11" },
        { tag: "3", head: "빛이신 예수님", body: "나는 세상의 빛이다 · 나는 위에서 났다    8:12~30" },
        { tag: "4", head: "참 자녀가 되게 하시는 예수님", body: "진리가 너희를 자유롭게 하리라    8:31~59" },
        { tag: "5", head: "보게 하시는 예수님", body: "날 때부터 맹인 된 사람    9장" },
        { tag: "6", head: "선한 목자이신 예수님", body: "목자 · 문 · 선한 목자 · 나와 아버지는 하나이니라    10장" },
      ],
      { y: 1.68, headSize: 21, bodySize: 15, tagW: 0.72, gap: 0.04 }
    );
    s.addNotes(
      "오늘의 지도입니다. 여섯 걸음이지만 묶으면 넷입니다 — 생수, 빛, 자유, 목자.\n\n" +
        "분량이 많습니다. 7장과 8장에서 시간을 다 쓰지 않도록 조심하십시오. " +
        "9장(맹인)과 10장(선한 목자)이 오늘의 절정입니다.\n\n" +
        "흐름을 하나로 꿰십시오. 1강 '예수님은 누구신가' → 2강 '영광이 어떻게 드러나는가' → " +
        "3강 '그 영광 앞에서 나는 어떻게 반응하는가' → 오늘 4강 '그분 자신이 영광이시다.'\n\n" +
        "그리고 오늘의 큰 대조 하나를 미리 깔아 두십시오 — " +
        "자기 영광을 구하는 사람과 하나님의 영광을 구하는 분."
    );
  }
};
