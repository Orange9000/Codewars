import re

def increment_string(strng):
    if all([(not x.isdigit()) for x in strng]): return strng + '1'
    return re.sub('\d+$', lambda m: increment(m.group(0)), strng)
    
def increment(s):
    num = str(int(('1' if s.startswith('0') else '') + s)+1)
    return num[1:] if s.startswith('0') else num
