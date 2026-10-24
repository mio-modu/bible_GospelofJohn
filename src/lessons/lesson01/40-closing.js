/** 제1강 · PART 4 마무리 + 부록 (5장) */
const { LAYOUT } = require("../../theme");
const { cardGrid, keyline, subhead, scripture, panel } = require("../../components");

module.exports = function closing(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;

  pres.addSection({ title: "마무리" });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: "마무리" });

  // ── 1강 한 장 정리
  {
    const s = S("CONTENT");
    s.addText("1강 한 장 정리", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "1", head: "핵심 주제", body: "예수님은 누구신가\n→ 예수님의 신성(神性)" },
        { tag: "2", head: "기록목적 (20:31)", body: "하나님의 아들이심을 믿고\n그 이름으로 생명을 얻게 함" },
      ],
      { y: 1.76, h: 2.3, cols: 2, headSize: 22, bodySize: 18 }
    );
    subhead(s, pres, { y: 4.24, tag: "3", text: "신성의 근거 여섯 가지" });
    cardGrid(
      s,
      pres,
      [
        { head: "일곱 자기선언", body: "떡 빛 문 목자\n부활 길 포도나무" },
        { head: "성령의 복음서", body: "하나님은 영이시다" },
        { head: "영광의 복음서", body: "1:14 · 17장" },
        { head: "사랑의 복음서", body: "서로 사랑하라" },
        { head: "일곱 표적", body: "가왕베\n오물실나" },
        { head: "유대 중심 사역", body: "명절마다\n예루살렘으로" },
      ],
      { y: 4.86, h: 1.94, cols: 6, headSize: 15, bodySize: 14, pad: 0.18 }
    );
  }

  // ── 구조 복습
  {
    const s = S("CONTENT_DARK");
    s.addText("4. 요한복음의 구조", { placeholder: "title" });
    const rows = [
      ["1", "신학적 서론", "~1:18"],
      ["2", "유대 · 예루살렘 사역", "1:19~12장"],
      ["3", "다락방 강화", "13~17장"],
      ["4", "수난과 부활", "18~20장"],
      ["5", "갈릴리 현현", "21장"],
    ];
    let y = 1.88;
    rows.forEach((r, i) => {
      panel(s, pres, { x: M, y, w: LAYOUT.CONTENT_W, h: 0.86, fill: C.accent2, shadow: false, name: `st-${i}` });
      s.addText(r[0], {
        x: M + 0.36, y, w: 0.7, h: 0.86, margin: 0, isTextBox: true,
        fontSize: 26, bold: true, color: C.accent1, valign: "middle", objectName: `st-${i}-n`,
      });
      s.addText(r[1], {
        x: M + 1.3, y, w: 7.0, h: 0.86, margin: 0, isTextBox: true,
        fontSize: 24, bold: true, color: C.background1, valign: "middle", objectName: `st-${i}-t`,
      });
      s.addText(r[2], {
        x: M + 8.4, y, w: 3.2, h: 0.86, margin: 0, isTextBox: true,
        fontSize: 22, color: C.accent6, align: "right", valign: "middle", objectName: `st-${i}-r`,
      });
      y += 0.98;
    });
  }

  // ── 다음 주까지
  {
    const s = S("CONTENT");
    s.addText("다음 주까지", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "1", head: "1강 소감문", body: "가장 마음에 남은 것\n한 가지를 중심으로", foot: "제출 : 2주차" },
        { tag: "2", head: "제2과 예습", body: "요 1:19~4:42\n교재 질문 미리 답하기", foot: "영광이 드러나다" },
        { tag: "3", head: "요한복음 통독", body: "한 주에 21장 일독", foot: "권장" },
        { tag: "4", head: "성구 암송", body: "요한복음 1:12\n요한복음 20:31", foot: "권장" },
      ],
      { y: 1.76, h: 3.2, cols: 4, headSize: 21, bodySize: 17, footSize: 15 }
    );
    scripture(s, pres, {
      x: M, y: 5.2, w: 11.8, h: 1.5, dark: false, fontSize: 23,
      text: "영접하는 자 곧 그 이름을 믿는 자들에게는 하나님의 자녀가 되는 권세를 주셨으니",
      ref: "요한복음 1:12 — 이번 주 암송 구절",
    });
  }

  // ── 맺음
  {
    const s = pres.addSlide({ masterName: "COVER", sectionTitle: "마무리" });
    s.addText("제1강을 마칩니다", { placeholder: "kicker" });
    s.addText("절대 예수", { placeholder: "title" });
    s.addText(
      [
        { text: "“오직 이것을 기록함은 너희로 예수께서 하나님의 아들", options: { italic: true, breakLine: true } },
        { text: "그리스도이심을 믿게 하려 함이요”", options: { italic: true, breakLine: true } },
        { text: "요한복음 20:31", options: { bold: true, fontSize: 17 } },
      ],
      { placeholder: "body" }
    );
  }

  // ── 부록
  pres.addSection({ title: "부록" });
  {
    const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "부록" });
    s.addText("부록 — 더 깊이 읽는 자료", { placeholder: "title" });
    const left = [
      ["성령의 상징", "바람 · 비둘기 · 물 · 기름 · 인 · 불"],
      ["안식일 치유 6", "손 마른 자 · 꼬부라진 여인 · 수종병자\n베데스다 · 실로암 · 가버나움 축귀"],
      ["“다시는 죄를 범하지 말라”", "간음한 여인 (8:11) · 베데스다 병자 (5:14)"],
      ["출교", "9:22 · 12:42 · 16:2"],
    ];
    const right = [
      ["제6시", "수가성 여인 · 십자가의 어둠"],
      ["제3시", "십자가에 못 박히심 · 성령 강림"],
      ["제9시", "예수님의 죽음 · 미문의 앉은뱅이"],
      ["제10시", "안드레의 부르심 (1:39)"],
      ["대조 구도", "빛 / 어두움 · 영 / 육\n진리 / 거짓 · 자유 / 종"],
    ];
    const render = (items, x) => {
      let y = 1.76;
      items.forEach((it, i) => {
        const h = it[1].includes("\n") ? 1.3 : 1.0;
        panel(s, pres, { x, y, w: 6.1, h, fill: C.background2, shadow: false, name: `ap-${x}-${i}` });
        s.addText(it[0], {
          x: x + 0.26, y: y + 0.12, w: 5.6, h: 0.4, margin: 0, isTextBox: true,
          fontSize: 17, bold: true, color: C.accent1, objectName: `ap-${x}-${i}-k`,
        });
        s.addText(it[1], {
          x: x + 0.26, y: y + 0.52, w: 5.6, h: h - 0.64, margin: 0, isTextBox: true,
          fontSize: 15.5, color: C.text1, lineSpacingMultiple: 1.16, valign: "top", objectName: `ap-${x}-${i}-v`,
        });
        y += h + 0.16;
      });
    };
    render(left, M);
    render(right, M + 6.33);
  }
};
