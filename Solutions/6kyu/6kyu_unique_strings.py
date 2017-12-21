from math import factorial as f
from functools import reduce
from operator import mul

def uniq_count(s):
    s=s.lower()
    return long(f(len(s))/reduce(mul, (f(s.count(c)) for c in set(s) ),1))
