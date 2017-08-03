from collections import Counter

def most_common(s):
    c=Counter(s)
    return ''.join(sorted(s, key=lambda x: c[x], reverse=1))
