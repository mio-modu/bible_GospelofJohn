/** 제1강 · PART 0 오리엔테이션 (5장) */
const { LAYOUT } = require("../../theme");
const { cardGrid, bullets, keyline, subhead, flow, panel, tableOpts, headRow } = require("../../components");

const SECTION = "오리엔테이션";

module.exports = function orientation(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  pres.addSection({ title: SECTION });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: SECTION });

  // ── 1. 표지 (인사 포함)
  {
    const s = S("COVER");
    s.addText("OBC 요한복음 · 제 1 강", { placeholder: "kicker" });
    s.addText("영광을 만나기 위한 준비", { placeholder: "title" });
    s.addText(
      [
        { text: "요한복음 1:1~18", options: { bold: true, breakLine: true } },
        { text: "BEE Korea 교재 제1과   |   서누리 성인공동체 · 드리머스 청년공동체", options: { fontSize: 15, breakLine: true } },
        { text: "박성은 목사", options: { fontSize: 15, color: C.accent1, bold: true } },
      ],
      { placeholder: "body" }
    );
    s.addText("사랑하고 축복합니다", {
      x: 1.05, y: 6.0, w: 8, h: 0.5, margin: 0, isTextBox: true,
      fontSize: 20, bold: true, color: C.accent1, objectName: "greeting",
    });
    s.addNotes("인사 → 과정 안내 → 소그룹 나눔(소개·조장선출) → 1과 강의 순서로 진행합니다.");
  }

  // ── 2. 오늘의 흐름 + 강의 방향
  {
    const s = S("CONTENT");
    s.addText("오늘 우리가 함께할 길", { placeholder: "title" });
    flow(
      s,
      pres,
      [
        { head: "오리엔테이션", body: "과정 · 수료 기준" },
        { head: "소그룹 나눔", body: "소개 · 조장 선출" },
        { head: "요한복음 분석", body: "저자 · 구조\n완전수 7" },
        { head: "1과 전반", body: "예수님에 대한 증언\n질문 1~21" },
        { head: "1과 후반", body: "하나님에 대한 증언\n질문 22~41" },
      ],
      { y: 1.64, h: 1.4, headSize: 16, bodySize: 12.5 }
    );
    subhead(s, pres, { y: 3.26, tag: "방향", text: "이 강의가 가는 방향" });
    cardGrid(
      s,
      pres,
      [
        { tag: "①", head: "한 가지 질문으로 끝까지 간다", body: "“예수님은 누구신가?”\n요한복음은 사건의 나열이 아니라\n예수님의 신성(神性)을 증언한다." },
        { tag: "②", head: "8과를 ‘영광’ 한 단어로 꿴다", body: "준비 → 드러남 → 드러내심 → 영광이신 예수님 → 영광이신 하나님 → 최후 여정 → 영광 안에 거함 → 초대" },
        { tag: "③", head: "매주 세 단계로 소화한다", body: "관찰 (본문이 무엇을 말하는가)\n분석 (구조 · 배경 · 단어)\n적용 (나에게 무엇을 요구하는가)" },
      ],
      { y: 3.8, h: 2.52, cols: 3, headSize: 17, bodySize: 13.5 }
    );
    keyline(s, pres, { y: 6.44, h: 0.44, text: "오늘의 한 문장  ·  “요한복음은 예수님이 누구신지를 증언하는 복음서입니다”", fontSize: 14 });
    s.addNotes("1주차는 오리엔테이션이 있어 소그룹 나눔을 강의보다 앞에 둡니다. 2주차부터는 강의1 → 나눔 → 강의2 순서입니다.");
  }

  // ── 3. 8주 과정 안내
  {
    const s = S("TABLE");
    s.addText("8주 과정 안내", { placeholder: "title" });
    const rows = [
      headRow(pres, ["주차", "단원", "본문", "과제"]),
      ["1주", "제1과  영광을 만나기 위한 준비", "요 1:1~18", "—"],
      ["2주", "제2과  영광이 드러나다", "요 1:19~4:42", "1강 소감문"],
      ["3주", "제3과  영광을 드러내시다", "요 4:43~6장", "2강 소감문"],
      ["4주", "제4과  영광이신 예수님", "요 7~10장", "3강 소감문"],
      ["5주", "제5과  영광이신 하나님", "요 11~12장", "4강 소감문"],
      ["6주", "제6과  영광으로의 최후 여정", "요 13~14장", "5강 소감문"],
      ["7주", "제7과  영광 안에 거함", "요 15~17장", "6강 소감문 · 시험"],
      ["8주", "제8과  영광으로의 초대", "요 18~21장", "간증문"],
    ];
    const body = rows.map((r, i) =>
      i === 0
        ? r
        : r.map((t, j) => ({
            text: t,
            options: {
              align: j === 0 || j === 3 ? "center" : "left",
              bold: j === 1,
              color: j === 1 ? C.text1 : C.accent3,
              fill: { color: i % 2 === 0 ? "FFFFFF" : "F7F9FB" },
            },
          }))
    );
    s.addTable(body, { ...tableOpts(pres, { colW: [1.1, 5.4, 2.9, 2.43], y: 1.6, rowH: 0.44 }) });
    s.addText("※ 날짜는 개강일에 맞춰 기입해 주세요.   ※ 공휴일 휴강 주차가 있으면 한 주씩 뒤로 조정합니다.", {
      x: M, y: 6.3, w: LAYOUT.CONTENT_W, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 12, color: C.accent3, objectName: "note",
    });
  }

  // ── 4. 수료 기준 + 매주 진행 순서
  {
    const s = S("CONTENT");
    s.addText("수료 기준과 진행 순서", { placeholder: "title" });
    subhead(s, pres, { y: 1.6, w: 6.1, tag: "수료", text: "수료 기준" });
    cardGrid(
      s,
      pres,
      [
        { head: "소감문", body: "매주 제출 (총 6주간)" },
        { head: "간증문", body: "8주차 강의까지 제출" },
        { head: "성적 산출", body: "출석 60% · 과제 30%\n시험 10%" },
        { head: "출석", body: "결석 1회까지 허용\n지각 20분 이상\n2회 = 결석 1회" },
      ],
      { x: M, y: 2.14, w: 6.1, h: 3.4, cols: 2, headSize: 16, bodySize: 13 }
    );
    keyline(s, pres, {
      x: M, y: 5.7, w: 6.1, h: 0.78,
      text: "권장 숙제 · 성구 암송 | 요한복음 일독\n다음 과 예습",
      fontSize: 14,
    });

    subhead(s, pres, { x: M + 6.33, y: 1.6, w: 6.1, tag: "진행", text: "매주 강의 진행 순서 (PM 8:00~10:00)" });
    const rows = [
      ["8:00 ~ 8:10", "찬양 · 대표기도"],
      ["8:10 ~ 8:55", "강의 1 (2주차부터 소감문 리뷰)"],
      ["8:55 ~ 9:05", "휴식"],
      ["9:05 ~ 9:27", "조별 소그룹 나눔 · 전체 나눔"],
      ["9:27 ~ 9:57", "강의 2"],
      ["9:57 ~ 10:00", "광고 및 마무리"],
    ];
    let y = 2.14;
    rows.forEach((r, i) => {
      panel(s, pres, { x: M + 6.33, y, w: 6.1, h: 0.68, fill: i % 2 ? C.background1 : C.background2, shadow: false, name: `tr-${i}`, lineColor: i % 2 ? "EDF1F4" : undefined });
      s.addText(r[0], {
        x: M + 6.53, y, w: 1.75, h: 0.68, margin: 0, isTextBox: true,
        fontSize: 14, bold: true, color: C.accent1, valign: "middle", objectName: `tr-${i}-t`,
      });
      s.addText(r[1], {
        x: M + 8.4, y, w: 3.85, h: 0.68, margin: 0, isTextBox: true,
        fontSize: 14, color: C.text1, valign: "middle", objectName: `tr-${i}-d`,
      });
      y += 0.76;
    });
  }

  // ── 5. 소그룹 나눔 Ⅰ
  {
    const s = S("SHARE");
    s.addText("소그룹 나눔 Ⅰ", { placeholder: "kicker" });
    s.addText("서로를 소개하고, 조장을 세웁니다", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "1", head: "자기소개", body: "이름 · 소속 공동체\n요즘 나의 한 주\n한 문장으로 나를 소개한다면" },
        { tag: "2", head: "요한복음 수강 계기", body: "왜 이 과정을 신청했나요?\n이 여덟 주 동안 기대하는 것 한 가지" },
        { tag: "3", head: "조장 선출", body: "출석 · 과제 체크\n단체방 운영 및 기도 요청 취합\n결석자 연락" },
      ],
      { y: 2.5, h: 3.0, cols: 3, headSize: 20, bodySize: 15, dark: true, fill: C.text2 }
    );
    s.addText(
      [
        { text: "진행 가이드  ", options: { bold: true, color: C.accent1, fontSize: 14 } },
        { text: "1인 2분 이내 · 전체 22분 · 마지막 3분에 조장 확정 후 전체 나눔에서 조장 소개", options: { color: C.background1, fontSize: 14 } },
      ],
      { x: M, y: 5.78, w: LAYOUT.CONTENT_W, h: 0.4, margin: 0, isTextBox: true, objectName: "guide" }
    );
    s.addNotes("조장은 자원을 먼저 받고, 없으면 추천으로 세웁니다. 조장 연락처를 꼭 확보하세요.");
  }
};
