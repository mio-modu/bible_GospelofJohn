/** 제6강 · 마무리 (4장) */
const { LAYOUT } = require("../../theme");
const { rows, statement, cardGrid, scripture } = require("../../components");

module.exports = function closing(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  pres.addSection({ title: "마무리" });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: "마무리" });

  // ── 남기신 것 (지도 닫기)
  {
    const s = S("CONTENT");
    s.addText("떠나시는 분이 남기신 것", { placeholder: "title" });
    const endY = rows(
      s,
      pres,
      [
        { tag: "본", head: "내가 너희에게 행한 것 같이 너희도 행하게 하려 하여", body: "요 13:15" },
        { tag: "계명", head: "새 계명을 너희에게 주노니 서로 사랑하라", body: "요 13:34" },
        { tag: "약속", head: "거처를 예비하면 내가 다시 와서 너희를 내게로 영접하여", body: "요 14:3" },
        { tag: "길", head: "내가 곧 길이요 진리요 생명이니", body: "요 14:6" },
        { tag: "보혜사", head: "또 다른 보혜사를 너희에게 주사 영원토록 너희와 함께 있게 하리니", body: "요 14:16" },
        { tag: "평안", head: "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라", body: "요 14:27" },
      ],
      { y: 1.70, headSize: 19, bodySize: 14, tagW: 1.6, gap: 0.02 }
    );
    s.addText("유언이 아니라 유산입니다", {
      x: M, y: Math.max(6.28, endY + 0.14), w: LAYOUT.CONTENT_W, h: 0.46, margin: 0, isTextBox: true,
      fontSize: 25, bold: true, color: C.accent1, valign: "middle", objectName: "legacy",
    });
    s.addNotes(
      "강의 처음에 펼쳤던 지도를 여기서 닫는다.\n\n" +
        "두 번의 일어남 사이에 무엇이 있었나. 여섯 가지를 남기셨다.\n\n" +
        "14장 27절의 끼치노니라는 말을 다시 짚는다. " +
        "유언에 쓰는 말이다. 떠나는 사람이 남겨 주는 것이다.\n\n" +
        "그런데 유언과 유산은 다르다. " +
        "유언은 말이고, 유산은 실제로 손에 쥐는 것이다. " +
        "예수님이 남기신 여섯 가지는 다 지금 우리 손에 있다. " +
        "본은 성경에 있고, 계명은 지킬 수 있고, 보혜사는 지금 함께 계신다.\n\n" +
        "그리고 그 모든 것의 값이 십자가였다. 유산을 남기려면 떠나야 했다.\n\n" +
        "오늘 일곱 Point를 구절로 빠르게 되짚어도 좋다.\n" +
        "  13:1   끝까지 사랑하시니라 — 배신자의 발까지 씻으셨다\n" +
        "  13:15  본을 보였노라 — 알고 행하면 복이 있다\n" +
        "  13:26  떡 한 조각을 적셔서 — 참으신 것이 아니라 품으셨다\n" +
        "  13:31  지금 인자가 영광을 받았고 — 문이 닫히자 영광이 시작된다\n" +
        "  13:34  서로 사랑하라 — 기준이 나에서 그분으로 바뀌었다\n" +
        "  14:1   근심하지 말라 — 믿을 분과 붙들 약속을 주신다\n" +
        "  14:6   내가 곧 길이요 진리요 생명이니 — 유일한 길이다\n" +
        "  14:15  나를 사랑하면 나의 계명을 지키리라 — 사랑이 먼저다\n" +
        "  14:27  평안을 너희에게 끼치노니 — 세상이 주는 것과 다르다"
    );
  }

  // ── 한 문장으로
  {
    const s = S("CONTENT_DARK");
    s.addText("한 문장으로", { placeholder: "title" });
    statement(s, pres, {
      y: 2.4, size: 42, dark: true,
      text: "끝까지 사랑하신 길이\n영광의 길입니다",
      sub: "무릎을 꿇으신 자리, 배신자에게 떡을 건네신 자리가 영광의 자리였습니다",
    });
    s.addNotes(
      "시작할 때 걸어 둔 문장으로 돌아온다.\n\n" +
        "13장 1절에서 끝까지 사랑하시니라 하셨고, " +
        "13장 31절에서 지금 인자가 영광을 받았고 하셨다. " +
        "그 사이에 있었던 일이 세족식과 떡 한 조각이다.\n\n" +
        "요한은 그 밤을 영광이라고 부른다. 우리가 생각하는 영광과 다르다. " +
        "무릎을 꿇고 남의 발을 닦는 자리, 배신자에게 음식을 건네는 자리가 영광의 자리다.\n\n" +
        "그러니 오늘 내가 서 있는 낮은 자리, 억울한 자리, " +
        "먼저 섬겨야 하는 그 자리가 영광에서 먼 자리가 아니다. " +
        "그분이 서셨던 그 자리다.\n\n" +
        "기도로 마치면서, 나눔에서 나온 지금 내가 씻어야 할 발을 한 번 더 언급한다."
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
        { tag: "1", head: "6강 소감문", body: "가장 마음에 남은 한 장면", foot: "제출 : 다음 주" },
        { tag: "2", head: "제7과 예습", body: "교재 질문 미리 답하기", foot: "" },
        { tag: "3", head: "통독", body: "요한복음 13~14장 다시", foot: "권장" },
        { tag: "4", head: "암송", body: "요한복음 13:34~35", foot: "필수" },
      ],
      { y: 1.86, h: 2.8, cols: 4, headSize: 23, bodySize: 18, footSize: 16 }
    );
    scripture(s, pres, {
      x: M, y: 4.92, w: LAYOUT.CONTENT_W, h: 1.92, dark: false, fontSize: 21,
      text: "새 계명을 너희에게 주노니 서로 사랑하라 내가 너희를 사랑한 것 같이 너희도 서로 사랑하라 너희가 서로 사랑하면 이로써 모든 사람이 너희가 내 제자인 줄 알리라",
      ref: "요한복음 13:34~35 — 이번 주 암송 구절",
    });
    s.addNotes(
      "소감문은 분량보다 한 장면에 집중하게 한다.\n\n" +
        "13:34~35는 반드시 암송하게 한다. " +
        "무엇을, 어떻게, 왜로 끊어 외우면 쉽다. " +
        "다음 주 시작할 때 함께 외우고 시작하면 좋다.\n\n" +
        "소그룹에 남길 질문 하나 — " +
        "이번 주에 내가 먼저 일어나야 할 자리는 어디입니까?"
    );
  }

  // ── 맺음
  {
    const s = pres.addSlide({ masterName: "COVER", sectionTitle: "마무리" });
    s.addText("제6강을 마칩니다", { placeholder: "kicker" });
    s.addText("영광으로의 최후 여정", { placeholder: "title" });
    s.addText(
      [
        { text: "“세상에 있는 자기 사람들을 사랑하시되", options: { italic: true, breakLine: true } },
        { text: "끝까지 사랑하시니라”", options: { italic: true, breakLine: true } },
        { text: "요한복음 13:1", options: { bold: true, fontSize: 17 } },
      ],
      { placeholder: "body" }
    );
    s.addNotes("13:1을 함께 읽고 기도로 마무리한다.");
  }
};
