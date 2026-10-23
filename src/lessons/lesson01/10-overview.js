/** 제1강 · PART 1 요한복음 전체 분석 */
const { LAYOUT, HEX } = require("../../theme");
const { cardGrid, bullets, stats, keyline, subhead, scripture, flow, compare, tableOpts, headRow, panel, badge } = require("../../components");

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
    s.addText("저자 · 기록목적 · 구조 · 완전수 7 · 21장 전체 조망", { placeholder: "body" });
  }

  // ── 누가, 언제, 왜
  {
    const s = S("CONTENT");
    s.addText("누가, 언제, 왜 썼는가", { placeholder: "title" });
    stats(
      s,
      pres,
      [
        { num: "요한", label: "사도 요한\n본문에는 ‘예수께서 사랑하시던 제자’로만 표기" },
        { num: "AD 85~90", label: "공관복음(55~68년)보다 후대\n밧모섬 유배(95년) 이전" },
        { num: "에베소", label: "기록 장소(전승)\n소아시아 교회를 향해 기록" },
        { num: "21장", label: "879절\n네 복음서 중 가장 나중의 기록" },
      ],
      { y: 1.62, h: 2.15, numSize: 34 }
    );
    subhead(s, pres, { y: 3.94, tag: "왜", text: "집필 동기 — 세 방향에서 흔들리는 교회를 붙들기 위해" });
    cardGrid(
      s,
      pres,
      [
        { head: "정치", body: "로마 정부의 박해 속에서\n신앙을 지키게 하려고" },
        { head: "문화", body: "헬라 종교·철학의 거센\n교리적 도전에 답하려고" },
        { head: "종교", body: "유대인 — 공동체 출교 위협\n이방인 — 이단 사상의 유혹" },
      ],
      { y: 4.42, h: 1.6, cols: 3, headSize: 18, bodySize: 14 }
    );
    s.addText("※ 출교 위협 : 9:22 · 12:42 · 16:2     ※ 가현설·영지주의 : 인성 부인  /  에비온파 : 신성 부인  → 요한은 ‘참 하나님이시며 참 사람이신 예수’를 증언한다.", {
      x: M, y: 6.12, w: LAYOUT.CONTENT_W, h: 0.6, margin: 0, isTextBox: true,
      fontSize: 13, color: C.accent3, lineSpacingMultiple: 1.2, objectName: "note",
    });
  }

  // ── 기록목적 (20:31)
  {
    const s = S("CONTENT_DARK");
    s.addText("기록목적 — 요한이 직접 밝힌 두 가지", { placeholder: "title" });
    scripture(s, pres, {
      x: M, y: 1.7, w: 11.8, h: 2.1,
      text: "오직 이것을 기록함은 너희로 예수께서 하나님의 아들 그리스도이심을 믿게 하려 함이요 또 너희로 믿고 그 이름을 힘입어 생명을 얻게 하려 함이니라",
      ref: "요한복음 20:31 (개역개정)",
      fontSize: 24,
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "①", head: "믿게 하려 함", body: "예수님이 하나님의 아들이시며\n그리스도이심을 믿도록" },
        { tag: "②", head: "생명을 얻게 하려 함", body: "믿는 자들이 그 이름을 힘입어\n생명의 능력을 누리도록" },
      ],
      { y: 3.98, h: 2.0, cols: 2, dark: true, fill: C.accent2, headSize: 19, bodySize: 14 }
    );
    keyline(s, pres, { y: 6.1, h: 0.62, text: "요한복음은 전도용 복음서가 아니라, 이미 믿는 자의 믿음을 더 단단하게 하는 복음서입니다", fontSize: 18 });
    s.addNotes("20:31은 1강에서 가장 중요한 구절입니다. 성구 암송 과제로 제시해도 좋습니다.");
  }

  // ── 핵심 주제 + 공관복음 비교
  {
    const s = S("CONTENT");
    s.addText("핵심 주제 — 예수님은 누구신가", { placeholder: "title" });
    keyline(s, pres, { y: 1.66, h: 0.72, text: "요한복음은 예수님의 ‘신성(神性)’에 초점을 맞춘다  ·  위로부터 오신 하나님의 아들", fontSize: 18 });
    compare(s, pres, {
      y: 2.52, h: 3.8,
      left: {
        head: "공관복음 (마 · 막 · 눅)",
        items: [
          { text: "AD 55~68년경 기록", sub: "요한복음보다 20~30년 앞선다" },
          { text: "갈릴리 중심의 사역", sub: "지역이 넓게 이동한다" },
          { text: "사건 중심 · 비유로 가르치심", sub: "짧은 비유, 많은 축사 기록" },
          { text: "사자 · 소 · 사람", sub: "왕 · 종 · 인자(人子)로서의 예수" },
        ],
      },
      right: {
        head: "요한복음",
        items: [
          { text: "AD 85~95년경 기록", sub: "가장 나중, 가장 깊이 숙성된 증언" },
          { text: "유대와 예루살렘 중심의 사역", sub: "명절마다 예루살렘으로 올라가신다" },
          { text: "표적 + 긴 설교 · 자기선언", sub: "사건 < 교훈. 13~17장은 통째로 설교" },
          { text: "독수리", sub: "하늘에서 오신 하나님의 아들" },
        ],
      },
    });
    s.addText("※ 요한복음에는 축사(귀신 쫓음) 기록이 없고, 종말의 묵시적 기록이 없으며, 성전 청결이 초기 사건으로 배치된다.", {
      x: M, y: 6.4, w: LAYOUT.CONTENT_W, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 12, color: C.accent3, objectName: "note",
    });
  }

  // ── 네 가지 별칭
  {
    const s = S("CONTENT");
    s.addText("요한복음의 네 가지 이름", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "영광", head: "영광의 복음서", body: "하나님의 영광이 특별히 계시된다.\n1:14과 17장이 대표적.", foot: "‘영광’ 최소 36회" },
        { tag: "영", head: "성령의 복음서", body: "성령님을 ‘보혜사’로 계시한다.\n3 · 4 · 6 · 14~16 · 20장", foot: "‘보혜사’ 4회" },
        { tag: "믿음", head: "신앙의 복음서", body: "살아 있는, 행동하는 믿음.\n믿음 = 영접 = 순종.", foot: "‘믿음’ 최소 98회" },
        { tag: "사랑", head: "사랑의 복음서", body: "하나님이 보여주신 사랑,\n서로 사랑하라는 새 계명(13장).", foot: "‘사랑’ 최소 51회" },
      ],
      { y: 1.7, h: 3.15, cols: 4, headSize: 17, bodySize: 14, badgeD: 0.52 }
    );
    subhead(s, pres, { y: 5.1, tag: "왜", text: "왜 ‘독수리 복음’이라 부르는가" });
    bullets(
      s,
      pres,
      [
        "영적으로 가장 높은 곳까지 솟아오르기 때문 — 시작도 끝도 없는 ‘태초’에서 출발한다",
        "예수님의 신성을 강조하기 때문 — 하늘에서 오심, 하나님의 아들 되심",
        "요한계시록 4장의 네 생물 중, 하늘에서 오신 예수님의 신성을 독수리로 표현하기 때문",
      ],
      { y: 5.6, h: 1.08, fontSize: 15, space: 5 }
    );
  }

  // ── 구조 1: 3단 구조
  {
    const s = S("CONTENT");
    s.addText("구조 ① 세 덩어리로 보는 요한복음", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        {
          tag: "증거",
          head: "1~12장",
          body: "예수님의 성육신과 일곱 표적,\n그리고 배척당하심\n\n다룬 기간 : 약 2~3년\n목적 : 믿게 하기 위함",
        },
        {
          tag: "교훈",
          head: "13~17장",
          body: "다락방 강화\n하나님의 아들 예수님의 가르침\n\n다룬 기간 : 약 2~3시간\n목적 : 생명을 얻기 위함",
        },
        {
          tag: "영광",
          head: "18~21장",
          body: "십자가와 부활\n예수님의 수난과 부활, 현현\n\n다룬 기간 : 약 2~3주\n목적 : 생명을 얻기 위함",
        },
      ],
      { y: 1.72, h: 3.5, cols: 3, headSize: 26, bodySize: 15, badgeD: 0.6 }
    );
    keyline(s, pres, {
      y: 5.5, h: 1.0,
      text: "2~3년 → 2~3시간 → 2~3주.   뒤로 갈수록 시간은 짧아지고 기록은 자세해진다.\n요한의 관심이 ‘사건’이 아니라 ‘영광’에 있다는 증거입니다.",
      fontSize: 16,
    });
  }

  // ── 구조 2: 5단 구조
  {
    const s = S("CONTENT");
    s.addText("구조 ② 다섯 단으로 보는 요한복음", { placeholder: "title" });
    const rows = [
      headRow(pres, ["단", "본문", "내용", "키워드"]),
      ["1", "1:1~18", "신학적 서론 — 성육신하신 예수님", "말씀 · 빛 · 영광"],
      ["2", "1:19~12장", "유대와 예루살렘 중심의 사역 — 일곱 표적과 자기선언", "가니수베 오초간 실양나마"],
      ["3", "13~17장", "다락방 강화 — 세족식, 성령장 3개, 대제사장적 기도", "새 계명 · 보혜사"],
      ["4", "18~20장", "십자가의 수난과 부활", "다 이루었다"],
      ["5", "21장", "결론 — 갈릴리(디베랴 바닷가)의 부활 현현", "153마리 · 내 양을 먹이라"],
    ];
    const body = rows.map((r, i) =>
      i === 0
        ? r
        : r.map((t, j) => ({
            text: t,
            options: {
              align: j === 0 ? "center" : "left",
              bold: j === 1 || j === 0,
              color: j === 2 ? C.text1 : j === 3 ? C.accent5 : C.text1,
              fill: { color: i % 2 === 0 ? "FFFFFF" : "F7F9FB" },
            },
          }))
    );
    s.addTable(body, { ...tableOpts(pres, { colW: [0.8, 1.9, 6.3, 2.83], y: 1.66, rowH: 0.6, fontSize: 14 }) });
    subhead(s, pres, { y: 5.4, tag: "cf", text: "다른 복음서의 구조" });
    bullets(
      s,
      pres,
      [
        "마태 — 오경적 구조 (다섯 설교)   |   마가 — 이적 / 수난 이야기   |   누가 — 예루살렘과 로마로 향하는 지리적 구성",
        "요한 — 전반부는 표적과 대중 설교, 후반부는 제자를 향한 확대된 설교와 수난 설화",
      ],
      { y: 5.94, h: 0.8, fontSize: 14, space: 4 }
    );
  }

  // ── 구조 3: 교재 8과 매핑
  {
    const s = S("CONTENT");
    s.addText("구조 ③ 교재 8과 = 영광의 여덟 장면", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "1", head: "영광을 만나기 위한 준비", body: "~1:18\n예수님은 누구신가에 대한 설명" },
        { tag: "2", head: "영광이 드러나다", body: "1:19~4:42\n세례요한의 증거 2회, 나다나엘,\n니고데모, 수가성 여인" },
        { tag: "3", head: "영광을 드러내시다", body: "4:43~6:71\n왕의 신하 · 베데스다 · 오병이어 ·\n물 위를 걸으심 (표적 4개)" },
        { tag: "4", head: "영광이신 예수님", body: "7:1~10:42\n초막절 증언, 실로암 맹인,\n양의 문, 선한 목자" },
        { tag: "5", head: "영광이신 하나님", body: "11:1~12:50\n나사로의 부활도, 예수님의 죽음도\n하나님께 영광" },
        { tag: "6", head: "영광으로의 최후 여정", body: "13~14장\n세족식, 길 · 진리 · 생명" },
        { tag: "7", head: "영광 안에 거함", body: "15~17장\n포도나무, 보혜사 성령,\n대제사장적 기도" },
        { tag: "8", head: "영광으로의 초대", body: "18~21장\n“네가 나를 사랑하느냐”\n내 양을 먹이라 · 치라 · 먹이라" },
      ],
      { y: 1.7, h: 4.95, cols: 4, headSize: 15, bodySize: 12.5, badgeD: 0.4, pad: 0.22 }
    );
  }

  // ── 완전수 7 ① 일곱 표적
  {
    const s = S("CONTENT");
    s.addText("완전수 7 ① 일곱 표적", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "가", head: "가나 혼인잔치", body: "물을 포도주로\n2:1~11" },
        { tag: "왕", head: "왕의 신하 아들 치유", body: "말씀만으로 고치심\n4:46~54" },
        { tag: "베", head: "베데스다 못 병자", body: "38년 된 병자\n5:1~9" },
        { tag: "오", head: "오병이어", body: "오천 명을 먹이심\n6:5~13" },
        { tag: "물", head: "물 위를 걸으심", body: "밤 사경에\n6:19~21" },
        { tag: "실", head: "실로암 맹인", body: "날 때부터 소경\n9:1~7" },
        { tag: "나", head: "나사로를 살리심", body: "표적 중의 표적\n11:1~44" },
        { tag: "+", head: "153마리 고기", body: "여덟 번째 표적으로 보기도\n21:1~14" },
      ],
      { y: 1.66, h: 3.95, cols: 4, headSize: 16, bodySize: 13, badgeD: 0.46, pad: 0.22 }
    );
    keyline(s, pres, {
      y: 5.76, h: 1.06,
      text: "표적(σημεῖον)은 기적 자체가 아니라, 예수님이 누구신지를 가리키는 ‘표지판’입니다.\n표적은 늘 자기선언과 짝을 이룬다 — 오병이어 뒤에 “나는 생명의 떡이다”, 실로암 뒤에 “나는 세상의 빛이다”",
      fontSize: 16,
    });
  }

  // ── 완전수 7 ② 일곱 자기선언
  {
    const s = S("CONTENT");
    s.addText("완전수 7 ② 일곱 자기선언 (에고 에이미)", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "생", head: "생명의 떡", body: "6:35\n살기 위해 꼭 필요한 양식" },
        { tag: "세", head: "세상의 빛", body: "8:12 · 9:5\n어둠 속을 보게 하는 빛" },
        { tag: "양", head: "양의 문", body: "10:7\n들어가는 유일한 문" },
        { tag: "선", head: "선한 목자", body: "10:11\n목숨을 버리는 목자" },
        { tag: "부", head: "부활이요 생명", body: "11:25\n죽음 너머의 생명" },
        { tag: "길", head: "길 · 진리 · 생명", body: "14:6\n아버지께 이르는 유일한 길" },
        { tag: "참", head: "참 포도나무", body: "15:1\n붙어 있어야 열매 맺는다" },
        { tag: "!", head: "에고 에이미", body: "출 3:14와 같은 표현\n→ 곧 신성 선언" },
      ],
      { y: 1.66, h: 3.95, cols: 4, headSize: 16, bodySize: 13, badgeD: 0.46, pad: 0.22 }
    );
    keyline(s, pres, {
      y: 5.76, h: 1.06,
      text: "떡 · 빛 · 문 · 목자 · 부활 · 길 · 포도나무 — 어린아이도 아는 사물로 자신을 완벽하게 증거하셨습니다.\n“나는 ~이다”는 곧 신성 선언입니다. 유대인들이 돌을 들었던 이유도 여기에 있습니다 (8:58~59, 10:30~33).",
      fontSize: 16,
    });
  }

  // ── 완전수 7 ③ 일곱 증인
  {
    const s = S("CONTENT");
    s.addText("완전수 7 ③ 일곱 증인", { placeholder: "title" });
    const rows = [
      headRow(pres, ["증인", "본문", "고백", "자리"]),
      ["세례 요한", "1:29~34", "하나님의 어린양 · 하나님의 아들 · 성령으로 세례 주시는 분", "선구자"],
      ["나다나엘", "1:49", "하나님의 아들 · 이스라엘의 임금", "첫 제자"],
      ["니고데모", "3:2", "하나님께로부터 오신 선생", "유대 지도자"],
      ["수가성 여인", "4:19, 29", "선지자 · 혹시 그리스도가 아니냐", "사마리아 여인"],
      ["수가성 사람들", "4:42", "세상의 구주", "이방 지역 주민"],
      ["도마", "20:28", "나의 주, 나의 하나님", "의심했던 제자"],
      ["사도 요한", "20:31", "하나님의 아들 그리스도", "저자 자신"],
    ];
    const body = rows.map((r, i) =>
      i === 0
        ? r
        : r.map((t, j) => ({
            text: t,
            options: {
              align: j === 1 || j === 3 ? "center" : "left",
              bold: j === 0,
              color: j === 2 ? C.accent5 : j === 3 ? C.accent3 : C.text1,
              fill: { color: i % 2 === 0 ? "FFFFFF" : "F7F9FB" },
            },
          }))
    );
    s.addTable(body, { ...tableOpts(pres, { colW: [2.2, 1.5, 6.2, 1.93], y: 1.62, rowH: 0.5, fontSize: 13.5 }) });
    keyline(s, pres, {
      y: 5.9, h: 0.8,
      text: "유대 지도자 · 사마리아 여인 · 이방 주민 · 의심한 제자 — 모든 종류의 사람이 같은 결론에 도달합니다",
      fontSize: 17,
    });
  }

  // ── 완전수 7 ④ 일곱 전도자 · 일곱 비사
  {
    const s = S("CONTENT");
    s.addText("완전수 7 ④ 일곱 전도자 · 일곱 비사", { placeholder: "title" });
    compare(s, pres, {
      y: 1.66, h: 4.62,
      left: {
        head: "일곱 전도자 (21장)",
        fontSize: 14,
        items: [
          { text: "요한복음의 마지막 장면은 승천이 아니다", sub: "디베랴 바닷가에서 일곱 제자와의 대화, 그리고 153마리" },
          "베드로 · 야고보 · 요한 · 도마 · 나다나엘 · 또 다른 두 제자 = 완전한 전도대",
          { text: "바다는 세상, 고기는 사람", sub: "“사람을 낚고 세우는 어부가 되라”는 강력한 메시지로 복음서를 닫는다" },
          { text: "153마리 — 그물이 찢어지지 아니하였더라", sub: "교회는 모든 민족을 담고도 찢어지지 않는다는 상징으로 읽는다" },
          { text: "숯불 조반, 그리고 세 번의 질문", sub: "세 번 부인한 베드로를 세 번 물어 회복시키신다 (21:15~17)" },
        ],
      },
      right: {
        head: "일곱 비사 — 익숙한 것으로 전한 영적 비밀",
        fontSize: 14,
        items: [
          "영원한 샘물 (4:14)",
          "이 성전을 헐라 (2:19)",
          "영원히 목마르지 아니할 생명의 양식 (6:51)",
          "밭이 희어져 추수하게 되었다 (4:35)",
          "소경 되게 하려 함이라 (9:39)",
          "빛이 있을 동안에 빛을 믿으라 (12:36)",
          "내가 너희 발을 씻기는 것이 옳으니라 (13:14)",
        ],
      },
    });
    s.addText("※ 비사(秘辭) : 우리가 익히 아는 내용을 차용해 하나님 나라의 영적 비밀을 전달하는 어법", {
      x: M, y: 6.42, w: LAYOUT.CONTENT_W, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 13, color: C.accent3, objectName: "note",
    });
  }

  // ── 21장 한 장씩 (1~11장)
  {
    const s = S("CONTENT");
    s.addText("21장 한눈에 보기 (1~11장)", { placeholder: "title" });
    const left = [
      ["1장", "말씀이신 예수, 하나님의 자녀 되는 권세, 성육신, 세례요한, 제자를 부르심"],
      ["2장", "물로 포도주를 만드심 (가나) · 성전 청결"],
      ["3장", "니고데모와의 대화 — 거듭남"],
      ["4장", "사마리아 여인과의 대화 — 참된 예배 · 왕의 신하 아들 치유"],
      ["5장", "38년 된 병자를 고치심 (베데스다) · 아버지와 아들"],
      ["6장", "오병이어 · 물 위를 걸으심 · “나는 생명의 떡이다”"],
    ];
    const right = [
      ["7장", "초막절 · “배에서 생수의 강이 흘러나리라”"],
      ["8장", "간음한 여인 · “나는 세상의 빛이다” · 진리가 자유케 함"],
      ["9장", "실로암에서 소경을 고치심 · 출교"],
      ["10장", "양의 문 · 선한 목자 · “나와 아버지는 하나이다”"],
      ["11장", "죽은 나사로를 살리심 · 부활이요 생명 · 예수를 죽이려 모의함"],
    ];
    const render = (items, x) => {
      let y = 1.7;
      items.forEach((it, i) => {
        panel(s, pres, { x, y, w: 6.1, h: 0.72, fill: C.background2, shadow: false, name: `ch-${x}-${i}` });
        s.addText(it[0], {
          x: x + 0.2, y, w: 0.85, h: 0.72, margin: 0, isTextBox: true,
          fontSize: 16, bold: true, color: C.accent1, valign: "middle", objectName: `ch-${x}-${i}-n`,
        });
        s.addText(it[1], {
          x: x + 1.08, y, w: 4.86, h: 0.72, margin: 0, isTextBox: true,
          fontSize: 12.5, color: C.text1, valign: "middle", lineSpacingMultiple: 1.1, objectName: `ch-${x}-${i}-t`,
        });
        y += 0.82;
      });
    };
    render(left, M);
    render(right, M + 6.33);
  }

  // ── 21장 한 장씩 (12~21장)
  {
    const s = S("CONTENT");
    s.addText("21장 한눈에 보기 (12~21장)", { placeholder: "title" });
    const left = [
      ["12장", "향유 부은 여인 · 예루살렘 입성 · 인자의 들림 · 심판 예언"],
      ["13장", "세족식 · 유다와 베드로 · 다락방 강화 시작 · 새 계명"],
      ["14장", "“나는 길, 진리, 생명” · 빌립의 질문 · 보혜사 약속"],
      ["15장", "참 포도나무 · 친구를 위해 목숨을 버림 · 서로 사랑하라"],
      ["16장", "성령의 일 · “내가 세상을 이기었노라”"],
    ];
    const right = [
      ["17장", "대제사장적 기도 — 영화롭게 / 하나가 되게 / 악에 빠지지 않게"],
      ["18장", "동산에서 잡히심 · 말고의 귀 · 베드로의 부인 · 빌라도의 심문"],
      ["19장", "채찍질 · 십자가 · 제비뽑음 · “다 이루었다” · 니고데모와 아리마대 요셉"],
      ["20장", "빈 무덤 · 막달라 마리아 · 제자들에게 나타나심 · 도마의 고백 · 기록목적"],
      ["21장", "디베랴 호수 · 153마리 · 숯불 조반 · “네가 나를 사랑하느냐” · 저자 밝힘"],
    ];
    const render = (items, x) => {
      let y = 1.68;
      items.forEach((it, i) => {
        panel(s, pres, { x, y, w: 6.1, h: 0.82, fill: C.background2, shadow: false, name: `ch2-${x}-${i}` });
        s.addText(it[0], {
          x: x + 0.2, y, w: 0.9, h: 0.82, margin: 0, isTextBox: true,
          fontSize: 16, bold: true, color: C.accent1, valign: "middle", objectName: `ch2-${x}-${i}-n`,
        });
        s.addText(it[1], {
          x: x + 1.13, y, w: 4.8, h: 0.82, margin: 0, isTextBox: true,
          fontSize: 12.5, color: C.text1, valign: "middle", lineSpacingMultiple: 1.12, objectName: `ch2-${x}-${i}-t`,
        });
        y += 0.9;
      });
    };
    render(left, M);
    render(right, M + 6.33);
    keyline(s, pres, { y: 6.24, h: 0.58, text: "13~17장(다락방 강화) 다섯 장이 ‘2~3시간’을 다룹니다 — 요한이 가장 공들인 대목", fontSize: 15 });
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
      { y: 1.7, h: 2.85, cols: 6, headSize: 13, bodySize: 11.5, badgeD: 0.34, pad: 0.14 }
    );
    keyline(s, pres, { y: 4.7, h: 0.74, text: "암기 두문자  ·  가 니 수 베  /  초 간 실 나  /  세 보 대", fontSize: 22 });
    subhead(s, pres, { y: 5.56, tag: "cf", text: "요한복음이 즐겨 쓰는 대조 구도" });
    bullets(
      s,
      pres,
      [
        "빛 ↔ 어두움 (1장)   |   하늘 ↔ 땅, 영 ↔ 육 (3장)   |   진리 ↔ 거짓 (8장)   |   자유 ↔ 종 (8장)",
        "대조는 중간을 허락하지 않는다 — 요한복음의 결단 요구",
      ],
      { y: 6.04, h: 0.78, fontSize: 15, space: 5 }
    );
  }

  // ── 암기 보드
  {
    const s = S("CONTENT_DARK");
    s.addText("오늘 가져갈 암기 보드", { placeholder: "title" });
    const lines = [
      { k: "일곱 표적", v: "가 왕 베 오 물 실 나", d: "가나 · 왕의신하 · 베데스다 · 오병이어 · 물위 · 실로암 · 나사로" },
      { k: "일곱 자기선언", v: "생 세 양 선 부 길 참", d: "떡 · 빛 · 문 · 목자 · 부활생명 · 길진리생명 · 포도나무" },
      { k: "1~12장 사건", v: "가 니 수 베 / 오 초 간 / 실 양 나 마", d: "2,3,4,5 / 6,7,8 / 9,10,11,12장" },
      { k: "요한 특수자료", v: "가 니 수 베 / 초 간 실 나 / 세 보 대", d: "공관복음에 없는 11가지" },
    ];
    let y = 1.76;
    lines.forEach((l, i) => {
      panel(s, pres, { x: M, y, w: LAYOUT.CONTENT_W, h: 1.1, fill: C.accent2, shadow: false, name: `memo-${i}` });
      s.addText(l.k, {
        x: M + 0.3, y: y + 0.14, w: 2.5, h: 0.82, margin: 0, isTextBox: true,
        fontSize: 15, bold: true, color: C.accent6, valign: "middle", objectName: `memo-${i}-k`,
      });
      s.addText(l.v, {
        x: M + 2.9, y: y + 0.1, w: 5.6, h: 0.52, margin: 0, isTextBox: true,
        fontSize: 24, bold: true, color: C.accent1, valign: "middle", objectName: `memo-${i}-v`,
      });
      s.addText(l.d, {
        x: M + 2.9, y: y + 0.62, w: 8.6, h: 0.38, margin: 0, isTextBox: true,
        fontSize: 12.5, color: C.accent3, valign: "middle", objectName: `memo-${i}-d`,
      });
      y += 1.22;
    });
    s.addNotes("두문자는 2주차 복습 퀴즈로 다시 물어봅니다.");
  }
};
