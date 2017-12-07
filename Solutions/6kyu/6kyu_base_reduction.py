import sys

sys.setrecursionlimit(150)

def basereduct(x):
    x=int(baseconvert(x))
    try: return x if x<10 else basereduct(x)
    except (RuntimeError): return -1
    
def baseconvert(x):
    x=list(map(int,str(x)))[::-1]
    base=max(x)+1
    if base==10: base=11
    return str(sum(pow(base,i)*j for i,j in enumerate(x)))
