# 발표자 노트를 '강사에게 지시하는 글'에서 '강사가 정리한 글'로.
# addNotes( ... ) 안쪽에만 적용한다.
import re, sys

BASE, FIN, F_B, F_N = 0xAC00, 28, 17, 4

def has_final(ch):
    c = ord(ch) - BASE
    return 0 <= c < 11172 and c % FIN != 0

def b_to_n(ch):
    c = ord(ch) - BASE
    if 0 <= c < 11172 and c % FIN == F_B:
        return chr(BASE + c - F_B + F_N)
    return None

# 1) 지시형 표현 (긴 것부터)
PHRASES = [
    (re.compile(r"Point (\d+), 마지막입니다"), r"Point \1, 마지막"),
    (re.compile(r"Point (\d+)입니다"), r"Point \1"),
    ("나란히 놓으십시오", "나란히 놓는다"),
    ("균형을 지켜 주십시오", "균형을 지킨다"),
    ("연결해서 말씀해 주십시오", "연결해서 말한다"),
    ("오해하지 않게 해 주십시오", "오해하지 않도록 짚는다"),
    ("한 번 더 언급해 주십시오", "한 번 더 언급한다"),
    ("집중하게 하십시오", "집중하게 한다"),
    ("반드시 암송하게 하십시오", "반드시 암송하게 한다"),
    ("맺으시는지 보십시오", "맺으시는지 본다"),
    ("빠르게 지나가셔도 됩니다", "빠르게 지나가도 된다"),
    ("짚으시면 충분합니다", "짚으면 충분하다"),
    ("디테일 하나를 마지막에 주십시오", "마지막에 디테일 하나"),
    ("흐름 하나만 다시 짚어 주십시오", "흐름 하나만 다시 짚는다"),
    ("짚어 주십시오", "짚는다"), ("짚으십시오", "짚는다"),
    ("정리하십시오", "정리한다"), ("기억하십시오", "기억한다"),
    ("연결하십시오", "연결한다"), ("마무리하십시오", "마무리한다"),
    ("읽으십시오", "읽는다"), ("쓰십시오", "쓴다"),
    ("놓으십시오", "놓는다"), ("보십시오", "본다"),
    ("하십시오", "한다"), ("기도로 마치시되", "기도로 마치면서"),
]

# 2) 규칙으로 안 되는 낱말
IRREGULAR = {
    "겁니다": "것이다", "아닙니다": "아니다", "다릅니다": "다르다",
    "단순합니다": "단순하다", "분명합니다": "분명하다", "묘합니다": "묘하다",
    "중요합니다": "중요하다", "유일합니다": "유일하다", "특별합니다": "특별하다",
    "충분합니다": "충분하다", "시니컬합니다": "시니컬하다",
    "닫습니다": "닫는다", "얻습니다": "얻는다", "않습니다": "않는다",
    "되짚습니다": "되짚는다",
}

def one(word):
    if word in IRREGULAR:
        return IRREGULAR[word]
    if word.endswith("입니다"):                       # 뜻입니다 → 뜻이다 / 여기입니다 → 여기다
        stem = word[:-3]
        if not stem:
            return "이다"
        return stem + ("이다" if has_final(stem[-1]) else "다")
    if word.endswith("이십니다"):                     # 빛이십니다 → 빛이시다
        return word[:-4] + "이시다"
    if word.endswith("습니다"):                       # 있습니다 → 있다, 했습니다 → 했다
        return word[:-3] + "다"
    if word.endswith("니다") and b_to_n(word[-3]):    # 합니다 → 한다, 하십니다 → 하신다
        return word[:-3] + b_to_n(word[-3]) + "다"
    return word

WORD = re.compile(r"[가-힣]{1,8}(?:습니다|입니다|니다)")

def convert(text):
    for a, b in PHRASES:
        text = a.sub(b, text) if isinstance(a, re.Pattern) else text.replace(a, b)
    return WORD.sub(lambda m: one(m.group(0)), text)

for path in sys.argv[1:]:
    src = open(path, encoding="utf-8").read()
    out = re.sub(r"(s\.addNotes\(\s*)([\s\S]*?)(\n?\s*\);)",
                 lambda m: m.group(1) + convert(m.group(2)) + m.group(3), src)
    open(path, "w", encoding="utf-8").write(out)
    print("고침:", path)
