from collections import Counter

def solve(a,b):
    c=Counter(a)
    return [c[s] for s in b]
