/** 제1강 · PART 1 요한복음 전체 분석 (13장) */
const { LAYOUT, HEX } = require("../../theme");
const { cardGrid, bullets, stats, keyline, subhead, scripture, compare, tableOpts, headRow, panel } = require("../../components");

const SECTION = "요한복음 분석";

module.exports = function overview(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  pres.addSection({ title: SECTION });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: SECTION });

  // ── 섹션 구분
  {
    const s = S("DIVIDER");
    s.addText("01", { placeholder: "num" });
    s.addText("요한복음, 한눈에 보기", { placeholder: "title" });
    s.addText("저자 · 기록목적 · 구조 · 완전수 7 · 21장 조망", { placeholder: "body" });
  }

  // ── 누가, 언제, 왜
  {
    const s = S("CONTENT");
    s.addText("누가, 언제, 왜 썼는가", { placeholder: "title" });
    stats(
      s,
      pres,
      [
        { num: "요한", label: "사도 요한\n‘예수께서 사랑하시던 제자’" },
        { num: "AD 85~90", label: "공관복음보다 후대\n밧모섬 유배 이전" },
        { num: "에베소", label: "기록 장소 (전승)\n소아시아 교회를 향해" },
        { num: "21장", label: "879절\n가장 나중의 기록" },
      ],
      { y: 1.72, h: 2.2, numSize: 38, labelSize: 16 }
    );
    subhead(s, pres, { y: 4.14, tag: "왜", text: "집필 동기 — 세 방향에서 흔들리는 교회를 붙들기 위해" });
    cardGrid(
      s,
      pres,
      [
        { head: "정치", body: "로마 정부의 박해 속에서\n신앙을 지키게" },
        { head: "문화", body: "헬라 철학의 도전에\n답하기 위해" },
        { head: "종교", body: "유대인 — 출교 위협\n이방인 — 이단의 유혹" },
      ],
      { y: 4.76, h: 1.9, cols: 3, headSize: 22, bodySize: 17 }
    );
  }

  // ── 기록목적 (20:31)
  {
    const s = S("CONTENT_DARK");
    s.addText("기록목적 — 요한이 직접 밝힌 두 가지", { placeholder: "title" });
    scripture(s, pres, {
      x: M, y: 1.78, w: 11.8, h: 2.3,
      text: "오직 이것을 기록함은 너희로 예수께서 하나님의 아들 그리스도이심을 믿게 하려 함이요 또 너희로 믿고 그 이름을 힘입어 생명을 얻게 하려 함이니라",
      ref: "요한복음 20:31 (개역개정)",
      fontSize: 26,
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "①", head: "믿게 하려 함", body: "하나님의 아들\n그리스도이심을 믿도록" },
        { tag: "②", head: "생명을 얻게 하려 함", body: "그 이름을 힘입어\n생명의 능력을 누리도록" },
      ],
      { y: 4.3, h: 2.3, cols: 2, dark: true, fill: C.accent2, headSize: 23, bodySize: 18 }
    );
    s.addNotes("20:31은 1강에서 가장 중요한 구절입니다. 성구 암송 과제로 제시해도 좋습니다.");
  }

  // ── 핵심 주제 + 공관복음 비교
  {
    const s = S("CONTENT");
    s.addText("핵심 주제 — 예수님은 누구신가", { placeholder: "title" });
    keyline(s, pres, { y: 1.72, h: 0.8, text: "요한복음은 예수님의 ‘신성(神性)’에 초점을 맞춘다", fontSize: 22 });
    compare(s, pres, {
      y: 2.76, h: 3.6,
      left: {
        head: "공관복음 (마 · 막 · 눅)",
        fontSize: 18,
        items: ["AD 55~68년경 기록", "갈릴리 중심의 사역", "사건 중심 · 비유로 가르치심", "사자 · 소 · 사람"],
      },
      right: {
        head: "요한복음",
        fontSize: 18,
        items: ["AD 85~95년경 기록", "유대와 예루살렘 중심", "표적 + 긴 설교 · 자기선언", "독수리"],
      },
    });
    s.addText("※ 요한복음에는 축사 기록이 없고, 성전 청결이 초기 사건으로 배치된다.", {
      x: M, y: 6.46, w: LAYOUT.CONTENT_W, h: 0.36, margin: 0, isTextBox: true,
      fontSize: 14, color: C.accent3, objectName: "note",
    });
  }

  // ── 네 가지 이름
  {
    const s = S("CONTENT");
    s.addText("요한복음의 네 가지 이름", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "영광", head: "영광의 복음서", body: "하나님의 영광이\n특별히 계시된다", foot: "‘영광’ 36회" },
        { tag: "영", head: "성령의 복음서", body: "성령님을 ‘보혜사’로\n계시한다", foot: "‘보혜사’ 4회" },
        { tag: "믿음", head: "신앙의 복음서", body: "살아 있는,\n행동하는 믿음", foot: "‘믿음’ 98회" },
        { tag: "사랑", head: "사랑의 복음서", body: "서로 사랑하라는\n새 계명 (13장)", foot: "‘사랑’ 51회" },
      ],
      { y: 1.78, h: 3.1, cols: 4, headSize: 20, bodySize: 17, badgeD: 0.56 }
    );
    subhead(s, pres, { y: 5.14, tag: "왜", text: "왜 ‘독수리 복음’인가" });
    bullets(
      s,
      pres,
      [
        "영적으로 가장 높은 곳까지 솟아오르기 때문 — ‘태초’에서 출발한다",
        "예수님의 신성을 강조하기 때문 — 하늘에서 오심, 하나님의 아들 되심",
      ],
      { y: 5.74, h: 1.05, fontSize: 18, space: 8 }
    );
  }

  // ── 구조 ① 세 덩어리
  {
    const s = S("CONTENT");
    s.addText("구조 ① 세 덩어리로 보면", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "증거", head: "1~12장", body: "성육신과 일곱 표적\n배척당하심\n\n약 2~3년\n믿게 하기 위함" },
        { tag: "교훈", head: "13~17장", body: "다락방 강화\n아들의 가르침\n\n약 2~3시간\n생명을 얻기 위함" },
        { tag: "영광", head: "18~21장", body: "십자가와 부활\n갈릴리 현현\n\n약 2~3주\n생명을 얻기 위함" },
      ],
      { y: 1.78, h: 3.6, cols: 3, headSize: 28, bodySize: 18, badgeD: 0.56 }
    );
    keyline(s, pres, {
      y: 5.66, h: 1.1,
      text: "뒤로 갈수록 시간은 짧아지고 기록은 자세해진다 —\n요한의 관심이 ‘사건’이 아니라 ‘영광’에 있다는 증거입니다.",
      fontSize: 20,
    });
  }

  // ── 구조 ③ 교재 8과
  {
    const s = S("CONTENT");
    s.addText("구조 ② 교재 8과 = 영광의 여덟 장면", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "1", head: "영광을 만나기 위한 준비", body: "~1:18" },
        { tag: "2", head: "영광이 드러나다", body: "1:19~4:42" },
        { tag: "3", head: "영광을 드러내시다", body: "4:43~6:71" },
        { tag: "4", head: "영광이신 예수님", body: "7:1~10:42" },
        { tag: "5", head: "영광이신 하나님", body: "11:1~12:50" },
        { tag: "6", head: "영광으로의 최후 여정", body: "13~14장" },
        { tag: "7", head: "영광 안에 거함", body: "15~17장" },
        { tag: "8", head: "영광으로의 초대", body: "18~21장" },
      ],
      { y: 1.74, h: 4.72, cols: 4, headSize: 19, bodySize: 17, badgeD: 0.5 }
    );
    s.addText("여덟 과를 ‘영광’ 한 단어로 꿰면 전체가 한눈에 들어옵니다", {
      x: M, y: 6.56, w: LAYOUT.CONTENT_W, h: 0.36, margin: 0, isTextBox: true,
      fontSize: 17, bold: true, color: C.accent5, objectName: "note",
    });
  }

  // ── 일곱 표적
  {
    const s = S("CONTENT");
    s.addText("완전수 7 ① 일곱 표적", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "가", head: "가나 혼인잔치", body: "물을 포도주로\n2:1~11" },
        { tag: "왕", head: "왕의 신하 아들", body: "말씀만으로\n4:46~54" },
        { tag: "베", head: "베데스다 못 병자", body: "38년 된 병자\n5:1~9" },
        { tag: "오", head: "오병이어", body: "오천 명을 먹이심\n6:5~13" },
        { tag: "물", head: "물 위를 걸으심", body: "밤 사경에\n6:19~21" },
        { tag: "실", head: "실로암 맹인", body: "날 때부터 소경\n9:1~7" },
        { tag: "나", head: "나사로를 살리심", body: "표적 중의 표적\n11:1~44" },
        { tag: "+", head: "153마리 고기", body: "여덟 번째 표적\n21:1~14" },
      ],
      { y: 1.76, h: 4.5, cols: 4, headSize: 19, bodySize: 16, badgeD: 0.5 }
    );
    s.addText("표적은 기적 자체가 아니라, 예수님이 누구신지를 가리키는 ‘표지판’입니다", {
      x: M, y: 6.42, w: LAYOUT.CONTENT_W, h: 0.38, margin: 0, isTextBox: true,
      fontSize: 18, bold: true, color: C.accent5, objectName: "note",
    });
  }

  // ── 일곱 자기선언
  {
    const s = S("CONTENT");
    s.addText("완전수 7 ② 일곱 자기선언 (에고 에이미)", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "생", head: "생명의 떡", body: "6:35\n꼭 필요한 양식" },
        { tag: "세", head: "세상의 빛", body: "8:12 · 9:5\n보게 하는 빛" },
        { tag: "양", head: "양의 문", body: "10:7\n유일한 문" },
        { tag: "선", head: "선한 목자", body: "10:11\n목숨을 버리는 목자" },
        { tag: "부", head: "부활이요 생명", body: "11:25\n죽음 너머의 생명" },
        { tag: "길", head: "길 · 진리 · 생명", body: "14:6\n아버지께 이르는 길" },
        { tag: "참", head: "참 포도나무", body: "15:1\n붙어 있어야 열매" },
        { tag: "!", head: "에고 에이미", body: "출 3:14와 같은 표현\n→ 곧 신성 선언" },
      ],
      { y: 1.76, h: 4.5, cols: 4, headSize: 19, bodySize: 16, badgeD: 0.5 }
    );
    s.addText("어린아이도 아는 사물로 자신을 완벽하게 증거하셨습니다  ·  “나는 ~이다”는 곧 신성 선언입니다", {
      x: M, y: 6.42, w: LAYOUT.CONTENT_W, h: 0.38, margin: 0, isTextBox: true,
      fontSize: 18, bold: true, color: C.accent5, objectName: "note",
    });
  }

  // ── 일곱 증인
  {
    const s = S("CONTENT");
    s.addText("완전수 7 ③ 일곱 증인", { placeholder: "title" });
    const rows = [
      headRow(pres, ["증인", "본문", "고백"]),
      ["세례 요한", "1:29~34", "하나님의 어린양 · 하나님의 아들"],
      ["나다나엘", "1:49", "하나님의 아들 · 이스라엘의 임금"],
      ["니고데모", "3:2", "하나님께로부터 오신 선생"],
      ["수가성 여인", "4:19, 29", "선지자 · 혹시 그리스도가 아니냐"],
      ["수가성 사람들", "4:42", "세상의 구주"],
      ["도마", "20:28", "나의 주, 나의 하나님"],
      ["사도 요한", "20:31", "하나님의 아들 그리스도"],
    ];
    const body = rows.map((r, i) =>
      i === 0
        ? r
        : r.map((t, j) => ({
            text: t,
            options: {
              align: j === 1 ? "center" : "left",
              bold: j === 0,
              color: j === 2 ? C.accent5 : C.text1,
              fill: { color: i % 2 === 0 ? "FFFFFF" : "F7F9FB" },
            },
          }))
    );
    s.addTable(body, { ...tableOpts(pres, { colW: [2.9, 2.0, 6.93], y: 1.76, rowH: 0.5, fontSize: 17 }) });
    keyline(s, pres, {
      y: 6.1, h: 0.7,
      text: "유대 지도자 · 사마리아 여인 · 이방 주민 · 의심한 제자 — 모두 같은 결론에 도달합니다",
      fontSize: 18,
    });
  }

  // ── 일곱 전도자 · 일곱 비사
  {
    const s = S("CONTENT");
    s.addText("완전수 7 ④ 일곱 전도자 · 일곱 비사", { placeholder: "title" });
    compare(s, pres, {
      y: 1.78, h: 4.3,
      left: {
        head: "일곱 전도자 (21장)",
        fontSize: 18,
        items: [
          "마지막 장면은 승천이 아니다",
          "디베랴 바닷가, 일곱 제자, 153마리",
          "베드로 · 야고보 · 요한 · 도마 ·\n나다나엘 · 또 다른 두 제자",
          "바다는 세상, 고기는 사람",
        ],
      },
      right: {
        head: "일곱 비사",
        fontSize: 17,
        items: [
          "영원한 샘물 (4:14)",
          "이 성전을 헐라 (2:19)",
          "영원히 목마르지 않을 양식 (6:51)",
          "밭이 희어져 추수하게 되었다 (4:35)",
          "소경 되게 하려 함이라 (9:39)",
          "빛이 있을 동안에 빛을 믿으라 (12:36)",
          "발을 씻기는 것이 옳으니라 (13:14)",
        ],
      },
    });
    s.addText("※ 비사 : 익히 아는 내용을 차용해 하나님 나라의 영적 비밀을 전달하는 어법", {
      x: M, y: 6.24, w: LAYOUT.CONTENT_W, h: 0.38, margin: 0, isTextBox: true,
      fontSize: 15, color: C.accent3, objectName: "note",
    });
  }

  // ── 21장 한눈에 보기
  {
    const s = S("CONTENT");
    s.addText("21장 한눈에 보기", { placeholder: "title" });
    const left = [
      ["1장", "말씀이신 예수 · 성육신 · 세례요한"],
      ["2장", "물로 포도주 (가나) · 성전 청결"],
      ["3장", "니고데모 — 거듭남"],
      ["4장", "사마리아 여인 · 왕의 신하 아들"],
      ["5장", "38년 된 병자 (베데스다)"],
      ["6장", "오병이어 · 물 위 · 생명의 떡"],
      ["7장", "초막절 · 생수의 강"],
      ["8장", "간음한 여인 · 세상의 빛"],
      ["9장", "실로암 소경 · 출교"],
      ["10장", "양의 문 · 선한 목자"],
      ["11장", "나사로 · 부활이요 생명"],
    ];
    const right = [
      ["12장", "향유 · 예루살렘 입성 · 인자의 들림"],
      ["13장", "세족식 · 다락방 강화 · 새 계명"],
      ["14장", "길 · 진리 · 생명 / 보혜사 약속"],
      ["15장", "참 포도나무 · 친구를 위해"],
      ["16장", "성령의 일 · 세상을 이기었노라"],
      ["17장", "대제사장적 기도"],
      ["18장", "잡히심 · 베드로의 부인 · 심문"],
      ["19장", "십자가 · “다 이루었다” · 장례"],
      ["20장", "빈 무덤 · 도마의 고백 · 기록목적"],
      ["21장", "153마리 · 네가 나를 사랑하느냐"],
    ];
    const render = (items, x) => {
      let y = 1.74;
      items.forEach((it, i) => {
        panel(s, pres, { x, y, w: 6.1, h: 0.44, fill: i % 2 ? C.background1 : C.background2, shadow: false, name: `c-${x}-${i}`, lineColor: i % 2 ? "EDF1F4" : undefined });
        s.addText(it[0], {
          x: x + 0.2, y, w: 0.95, h: 0.44, margin: 0, isTextBox: true,
          fontSize: 16, bold: true, color: C.accent1, valign: "middle", objectName: `c-${x}-${i}-n`,
        });
        s.addText(it[1], {
          x: x + 1.2, y, w: 4.75, h: 0.44, margin: 0, isTextBox: true,
          fontSize: 14.5, color: C.text1, valign: "middle", objectName: `c-${x}-${i}-t`,
        });
        y += 0.47;
      });
    };
    render(left, M);
    render(right, M + 6.33);
  }

  // ── 요한 특수자료
  {
    const s = S("CONTENT");
    s.addText("요한 특수자료 — 공관복음에 없는 열한 가지", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "가", head: "가나 혼인잔치", body: "2장" },
        { tag: "니", head: "니고데모", body: "3 · 7 · 19장" },
        { tag: "수", head: "수가성 여인", body: "4장" },
        { tag: "베", head: "베데스다 병자", body: "5장" },
        { tag: "초", head: "초막절", body: "7장" },
        { tag: "간", head: "간음한 여인", body: "8장" },
        { tag: "실", head: "실로암 맹인", body: "9장" },
        { tag: "나", head: "나사로 살림", body: "11장" },
        { tag: "세", head: "세족식", body: "13장" },
        { tag: "보", head: "보혜사", body: "14~16장" },
        { tag: "대", head: "대제사장 기도", body: "17장" },
      ],
      { y: 1.74, h: 3.9, cols: 6, headSize: 16, bodySize: 15, badgeD: 0.42, pad: 0.16 }
    );
    keyline(s, pres, {
      y: 5.72, h: 1.08,
      text: "암기 두문자   표적 : 가 왕 베 오 물 실 나   /   선언 : 생 세 양 선 부 길 참\n특수자료 : 가 니 수 베  /  초 간 실 나  /  세 보 대",
      fontSize: 21,
    });
  }

};
