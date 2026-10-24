/**
 * 슬라이드 구성 요소 (모티프: 금색 원형 배지 + 연한 패널 카드)
 *
 * 모든 함수는 (slide, pres, spec) 형태. 색은 pres.SchemeColor 로만 지정하고
 * hex 가 필요한 옵션(그림자 등)은 theme.js 의 HEX 를 쓴다.
 */
const { HEX, LAYOUT, SHADOW } = require("./theme");

/* ── 텍스트 높이 추정 ──────────────────────────────────────────────
 * pptxgenjs 는 렌더링을 하지 않으므로, 박스 밖으로 글자가 넘치는 것을
 * 빌드 시점에 잡으려면 직접 줄 수를 추정해야 한다.
 * 한글/CJK 는 글자 폭 ≈ 폰트 크기, 영문·숫자는 그 절반 정도로 계산한다.
 */
const CJK = /[\u1100-\u11FF\u3000-\u30FF\u3130-\u318F\u4E00-\u9FFF\uAC00-\uD7AF\uFF00-\uFF60]/;

function lineWidth(text, fontSize) {
  let w = 0;
  for (const ch of text) w += (CJK.test(ch) ? 1.0 : ch === " " ? 0.3 : 0.54) * (fontSize / 72);
  return w * 1.08; // 안전 계수 - 추정이 빠듯하면 실제로는 한 줄이 더 접힌다
}

function textHeight(text, wIn, fontSize, lineSpacing = 1.3) {
  if (!text) return 0;
  const lines = String(text)
    .split("\n")
    .reduce((n, ln) => n + Math.max(1, Math.ceil(lineWidth(ln, fontSize) / Math.max(wIn, 0.1))), 0);
  return lines * (fontSize / 72) * lineSpacing;
}

const WARNINGS = [];
function warn(msg, slide) {
  const n = slide && slide._slideNum ? `슬라이드 ${slide._slideNum}  ` : "";
  WARNINGS.push(n + msg);
}
function flushWarnings() {
  const out = WARNINGS.slice();
  WARNINGS.length = 0;
  return out;
}

/** 금색 원형 배지 - 덱 전체를 묶는 시각 모티프 */
function badge(slide, pres, { x, y, d = 0.46, text = "", fill, color, fontSize, name }) {
  const C = pres.SchemeColor;
  const fs = fontSize || Math.round(d * 30);
  // 글자가 원보다 넓으면 알약 모양으로 늘려 잘리지 않게 한다
  const w = Math.max(d, lineWidth(String(text), fs) + 0.2);
  slide.addShape(w > d + 0.01 ? pres.ShapeType.roundRect : pres.ShapeType.ellipse, {
    x, y, w, h: d,
    rectRadius: w > d + 0.01 ? d / 2 : undefined,
    fill: { color: fill || C.accent1 },
    line: { type: "none" },
    objectName: name ? `${name}-badge` : undefined,
  });
  slide.addText(String(text), {
    x, y, w, h: d, margin: 0, isTextBox: true,
    align: "center", valign: "middle", bold: true,
    fontSize: fs,
    color: color || C.background1,
    objectName: name ? `${name}-badge-text` : undefined,
  });
}

/** 연한 패널 (카드 바탕) */
function panel(slide, pres, { x, y, w, h, fill, radius = 0.06, shadow = true, name, lineColor }) {
  const C = pres.SchemeColor;
  slide.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, rectRadius: radius,
    fill: { color: fill || C.background2 },
    line: lineColor ? { color: lineColor, width: 1 } : { type: "none" },
    shadow: shadow ? SHADOW() : undefined,
    objectName: name,
  });
}

/**
 * 카드 그리드. items: [{ tag, head, body, foot }]
 * tag 가 있으면 금색 배지로, 없으면 head 만 표시한다.
 */
function cardGrid(slide, pres, items, opts = {}) {
  const C = pres.SchemeColor;
  const {
    x = LAYOUT.MARGIN, y = LAYOUT.BODY_Y, w = LAYOUT.CONTENT_W, h = LAYOUT.BODY_H,
    cols = items.length, gap = 0.26, headSize = 20.5, bodySize = 17, footSize = 15.5,
    fill, dark = false, badgeD = 0.44, pad = 0.26, name = "card",
  } = opts;
  const rows = Math.ceil(items.length / cols);
  const cw = (w - gap * (cols - 1)) / cols;
  const ch = (h - gap * (rows - 1)) / rows;
  const headColor = dark ? C.background1 : C.text1;
  const bodyColor = dark ? C.accent6 : C.accent3;
  const inner = cw - pad * 2;

  items.forEach((it, i) => {
    const cx = x + (i % cols) * (cw + gap);
    const cy = y + Math.floor(i / cols) * (ch + gap);
    panel(slide, pres, { x: cx, y: cy, w: cw, h: ch, fill: fill || (dark ? C.accent2 : C.background2), name: `${name}-${i}` });

    const footH = it.foot ? textHeight(it.foot, inner, footSize, 1.25) + 0.24 : 0;
    let ty = cy + pad;
    if (it.tag !== undefined) {
      badge(slide, pres, { x: cx + pad, y: ty, d: badgeD, text: it.tag, name: `${name}-${i}` });
      ty += badgeD + 0.14;
    }
    if (it.head) {
      const hh = textHeight(it.head, inner, headSize, 1.26);
      slide.addText(it.head, {
        x: cx + pad, y: ty, w: inner, h: hh, margin: 0, isTextBox: true,
        fontSize: headSize, bold: true, color: headColor, valign: "top",
        objectName: `${name}-${i}-head`,
      });
      ty += hh + 0.08;
    }
    if (it.body) {
      const avail = cy + ch - pad - footH - ty;
      const need = textHeight(it.body, inner, bodySize, 1.24);
      if (need > avail + 0.02) {
        warn(`cardGrid[${name}-${i}] 본문이 카드보다 ${(need - avail).toFixed(2)}" 큽니다: "${String(it.body).slice(0, 28)}…"`, slide);
      }
      slide.addText(it.body, {
        x: cx + pad, y: ty, w: inner, h: Math.max(avail, 0.2),
        margin: 0, isTextBox: true, fontSize: bodySize, color: bodyColor,
        lineSpacingMultiple: 1.22, valign: "top", objectName: `${name}-${i}-body`,
      });
    }
    if (it.foot) {
      slide.addText(it.foot, {
        x: cx + pad, y: cy + ch - pad - footH + 0.04, w: inner, h: footH, margin: 0, isTextBox: true,
        fontSize: footSize, bold: true, color: C.accent1, valign: "bottom",
        objectName: `${name}-${i}-foot`,
      });
    }
  });
}

/** 불릿 목록. items: 문자열 | [{text, bold, color}] | {text, sub} */
function bullets(slide, pres, items, opts = {}) {
  const C = pres.SchemeColor;
  const {
    x = LAYOUT.MARGIN, y = LAYOUT.BODY_Y, w = LAYOUT.CONTENT_W, h,
    fontSize = 19.5, dark = false, color, space = 10, indentSub = true, name = "bullets",
  } = opts;
  const base = color || (dark ? C.accent6 : C.text1);
  const runs = [];
  items.forEach((it, i) => {
    const last = i === items.length - 1;
    if (typeof it === "string") {
      runs.push({ text: it, options: { bullet: true, fontSize, color: base, breakLine: !last, paraSpaceAfter: space } });
    } else if (it.sub) {
      runs.push({ text: it.text, options: { bullet: true, fontSize, bold: true, color: base, breakLine: true, paraSpaceAfter: 2 } });
      runs.push({
        text: it.sub,
        options: {
          bullet: false, fontSize: fontSize - 2, color: dark ? C.accent3 : C.accent3,
          indentLevel: indentSub ? 1 : 0, breakLine: !last, paraSpaceAfter: space,
        },
      });
    } else {
      runs.push({
        text: it.text,
        options: {
          bullet: it.bullet !== false, fontSize: it.fontSize || fontSize, bold: !!it.bold,
          color: it.color || base, breakLine: !last, paraSpaceAfter: space,
        },
      });
    }
  });
  if (h) {
    const need = runs.reduce(
      (t, r) => t + textHeight(r.text, w - (r.options.indentLevel ? 0.3 : 0.24), r.options.fontSize, 1.3) + (r.options.paraSpaceAfter || 0) / 72,
      0
    );
    if (need > h + 0.02) warn(`bullets[${name}] 목록이 ${(need - h).toFixed(2)}" 넘칩니다: "${String(items[0].text || items[0]).slice(0, 24)}…"`, slide);
  }
  slide.addText(runs, { x, y, w, h, margin: 0, isTextBox: true, valign: "top", objectName: name });
}

/** 성경 본문 인용 블록 */
function scripture(slide, pres, { x, y, w, h, text, ref, fontSize = 25, dark = true, name = "scripture" }) {
  const C = pres.SchemeColor;
  const avail = h - 0.5;
  const need = textHeight(`“${text}”`, w, fontSize, 1.42);
  if (need > avail + 0.02) {
    warn(`scripture[${name}] 본문이 출처 줄과 ${(need - avail).toFixed(2)}" 겹칩니다: "${String(text).slice(0, 24)}…"`, slide);
  }
  slide.addText(`“${text}”`, {
    x, y, w, h: avail, margin: 0, isTextBox: true, fontSize, italic: true,
    color: dark ? C.background1 : C.text1, lineSpacingMultiple: 1.42, valign: "top",
    objectName: `${name}-text`,
  });
  slide.addText(ref, {
    x, y: y + h - 0.44, w, h: 0.4, margin: 0, isTextBox: true,
    fontSize: 15, bold: true, color: C.accent1, objectName: `${name}-ref`,
  });
}

/** 가로 흐름도. steps: [{head, body}] - 사이에 금색 화살표 */
function flow(slide, pres, steps, opts = {}) {
  const C = pres.SchemeColor;
  const {
    x = LAYOUT.MARGIN, y, w = LAYOUT.CONTENT_W, h = 1.5,
    headSize = 20.5, bodySize = 16, dark = false, arrow = 0.42, name = "flow",
  } = opts;
  const bw = (w - arrow * (steps.length - 1)) / steps.length;
  steps.forEach((s, i) => {
    const bx = x + i * (bw + arrow);
    panel(slide, pres, { x: bx, y, w: bw, h, fill: dark ? C.accent2 : C.background2, name: `${name}-${i}` });
    slide.addText(s.head, {
      x: bx + 0.16, y: y + 0.2, w: bw - 0.32, h: 0.42, margin: 0, isTextBox: true,
      fontSize: headSize, bold: true, align: "center", color: dark ? C.background1 : C.text1,
      objectName: `${name}-${i}-head`,
    });
    if (s.body) {
      const availB = h - 0.84;
      const needB = textHeight(s.body, bw - 0.28, bodySize, 1.2);
      if (needB > availB + 0.02) warn(`flow[${name}-${i}] 본문이 ${(needB - availB).toFixed(2)}" 넘칩니다: "${String(s.body).slice(0, 24)}…"`, slide);
      slide.addText(s.body, {
        x: bx + 0.14, y: y + 0.66, w: bw - 0.28, h: availB, margin: 0, isTextBox: true,
        fontSize: bodySize, align: "center", color: dark ? C.accent6 : C.accent3,
        lineSpacingMultiple: 1.18, valign: "top", objectName: `${name}-${i}-body`,
      });
    }
    if (i < steps.length - 1) {
      slide.addText("▸", {
        x: bx + bw, y: y + h / 2 - 0.22, w: arrow, h: 0.44, margin: 0, isTextBox: true,
        fontSize: 15, align: "center", valign: "middle", color: C.accent1,
        objectName: `${name}-${i}-arrow`,
      });
    }
  });
}

/** 좌우 비교 패널 */
function compare(slide, pres, { x = LAYOUT.MARGIN, y, w = LAYOUT.CONTENT_W, h, gap = 0.3, left, right, name = "cmp" }) {
  const C = pres.SchemeColor;
  const cw = (w - gap) / 2;
  [left, right].forEach((side, i) => {
    const cx = x + i * (cw + gap);
    const isDark = i === 1;
    panel(slide, pres, { x: cx, y, w: cw, h, fill: isDark ? C.text2 : C.background2, name: `${name}-${i}` });
    const headH = Math.max(0.46, textHeight(side.head, cw - 0.6, 20, 1.24));
    slide.addText(side.head, {
      x: cx + 0.3, y: y + 0.26, w: cw - 0.6, h: headH, margin: 0, isTextBox: true,
      fontSize: 20, bold: true, color: isDark ? C.accent1 : C.text1, valign: "top",
      objectName: `${name}-${i}-head`,
    });
    bullets(slide, pres, side.items, {
      x: cx + 0.3, y: y + 0.3 + headH + 0.14, w: cw - 0.6, h: h - (0.44 + headH + 0.14),
      fontSize: side.fontSize || 15, dark: isDark, space: 9,
      color: isDark ? C.background1 : C.text1, name: `${name}-${i}-items`,
    });
  });
}

/** 큰 숫자 통계 타일 */
function stats(slide, pres, items, opts = {}) {
  const C = pres.SchemeColor;
  const {
    x = LAYOUT.MARGIN, y, w = LAYOUT.CONTENT_W, h = 1.7, gap = 0.26,
    numSize = 47.5, dark = false, name = "stat",
  } = opts;
  const cw = (w - gap * (items.length - 1)) / items.length;
  items.forEach((it, i) => {
    const cx = x + i * (cw + gap);
    panel(slide, pres, { x: cx, y, w: cw, h, fill: dark ? C.accent2 : C.background2, name: `${name}-${i}` });
    const numH = 0.78;
    slide.addText(it.num, {
      x: cx + 0.12, y: y + 0.18, w: cw - 0.24, h: numH, margin: 0, isTextBox: true,
      fontSize: numSize, bold: true, align: "center", color: C.accent1, valign: "middle",
      objectName: `${name}-${i}-num`,
    });
    const labelSize = it.labelSize || 14;
    const avail = h - (numH + 0.18) - 0.18;
    const need = textHeight(it.label, cw - 0.4, labelSize, 1.24);
    if (need > avail + 0.02) {
      warn(`stats[${name}-${i}] 설명이 카드보다 ${(need - avail).toFixed(2)}" 큽니다: "${String(it.label).slice(0, 28)}…"`, slide);
    }
    slide.addText(it.label, {
      x: cx + 0.12, y: y + numH + 0.18, w: cw - 0.24, h: avail, margin: 0, isTextBox: true,
      fontSize: labelSize, align: "center", color: dark ? C.accent6 : C.accent3,
      lineSpacingMultiple: 1.2, valign: "top", objectName: `${name}-${i}-label`,
    });
  });
}

/** 섹션 안의 작은 소제목 (금색 배지 + 굵은 글씨) */
function subhead(slide, pres, { x = LAYOUT.MARGIN, y, w = LAYOUT.CONTENT_W, tag, text, dark = false, fontSize = 21.5, name = "subhead" }) {
  const C = pres.SchemeColor;
  let tx = x;
  if (tag !== undefined) {
    badge(slide, pres, { x, y: y + 0.01, d: 0.38, text: tag, fontSize: 13, name });
    tx = x + Math.max(0.38, lineWidth(String(tag), 13) + 0.2) + 0.14;
  }
  slide.addText(text, {
    x: tx, y, w: w - (tx - x), h: 0.4, margin: 0, isTextBox: true,
    fontSize, bold: true, color: dark ? C.background1 : C.text1, valign: "middle",
    objectName: `${name}-text`,
  });
}

/** 한 줄 핵심 요약 띠 (먹색 바탕 + 금색 글씨) */
function keyline(slide, pres, { x = LAYOUT.MARGIN, y, w = LAYOUT.CONTENT_W, h = 0.62, text, fontSize = 20.5, name = "keyline" }) {
  const C = pres.SchemeColor;
  panel(slide, pres, { x, y, w, h, fill: C.text2, radius: 0.1, shadow: false, name });
  slide.addText(text, {
    x: x + 0.3, y, w: w - 0.6, h, margin: 0, isTextBox: true,
    fontSize, bold: true, color: C.accent6, valign: "middle", objectName: `${name}-text`,
  });
}

/** 표 기본 스타일 */
function tableOpts(pres, { colW, x = LAYOUT.MARGIN, y = LAYOUT.BODY_Y, fontSize = 16, rowH = 0.42 }) {
  const C = pres.SchemeColor;
  return {
    x, y, w: LAYOUT.CONTENT_W, colW, rowH,
    fontSize, fontFace: "맑은 고딕", color: C.text1, valign: "middle",
    border: [
      { type: "none" },
      { type: "none" },
      { type: "solid", color: HEX.accent4, pt: 0.75 },
      { type: "none" },
    ],
    margin: [0.06, 0.12, 0.06, 0.12],
  };
}

function headRow(pres, labels) {
  const C = pres.SchemeColor;
  return labels.map((t) => ({
    text: t,
    options: { bold: true, color: C.background1, fill: { color: HEX.dk2 }, align: "center", fontSize: 13 },
  }));
}

module.exports = { badge, panel, cardGrid, bullets, scripture, flow, compare, stats, subhead, keyline, tableOpts, headRow, textHeight, warn, flushWarnings };
