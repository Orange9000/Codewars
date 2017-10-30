def solve(a,b):
    pairs={}
    for i in range(a,b):
        ratio=div_sum(i)/i
        try:    pairs[ratio]=pairs[ratio]+[i]
        except: pairs[ratio]=[i]
    return sum(min(i) for i in pairs.values() if len(i)>=2)

    
def div_sum(n):
    return sum(i for i in range(1,n+1) if n%i==0)
