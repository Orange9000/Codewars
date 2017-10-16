import re

def AlphaNum_NumAlpha(string):
    return ''.join(swap(s) for s in re.findall('\d{1,2}|[a-z]', string))


def swap(s):
    return chr(int(s)+96) if s.isdigit() else str(ord(s)-96)
