def solve(a,b):
    return ''.join(c for c in a+b if c in set(a).symmetric_difference(set(b)))
