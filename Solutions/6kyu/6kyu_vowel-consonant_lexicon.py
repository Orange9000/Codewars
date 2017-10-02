from itertools import zip_longest as zlo
import re

def solve(s):
    c = sorted(re.findall('[^aeiou]', s))
    v = sorted(re.findall('[aeiou]', s))
    if abs(len(c)-len(v))>1: return 'failed'
    return ''.join(i+j if len(c)<=len(v) else j+i for i,j in zlo(v,c, fillvalue=''))
