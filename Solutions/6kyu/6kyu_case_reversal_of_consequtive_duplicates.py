import re

def reverse(s):
    return re.sub(r'([a-zA-Z])(\1)+', lambda c: c.group().swapcase(), s)
