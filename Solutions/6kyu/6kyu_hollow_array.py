from itertools import takewhile

def is_hollow(x):
    if not x: return 0
    
    # indexes of non-zeroes at the beginning of an array
    bf = [i for i,j in takewhile(lambda i: i[1]!=0, enumerate(x))]
    
    # indexes of non-zeroes at the end of an array
    af = [len(x)-i-1 for i,j in takewhile(lambda i: i[1]!=0, enumerate(x[::-1]))]
    
    # all indexes of non-zero numbers in an array
    nz = set(af + bf)
    
    # all numbers in between bf and af
    cmp = [j for i,j in enumerate(x) if i not in nz]
    
    return all(i==0 for i in cmp) and len(cmp)>=3 and len(bf)==len(af)
