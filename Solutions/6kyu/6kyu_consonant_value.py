import re

def solve(s):
    return max(sum(ord(h) for h in c)-(len(c)*96) for c in re.findall('[^aeiou]+', s, re.I))
