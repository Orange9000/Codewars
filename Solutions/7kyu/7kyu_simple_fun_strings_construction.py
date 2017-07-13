from collections import Counter

def strings_construction(A,B):
    o = Counter(A); c = Counter(B)
    return min(c.get(char,0)//o[char] for char in A)
