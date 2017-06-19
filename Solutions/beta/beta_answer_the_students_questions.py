from collections import Counter

def answer(q,inf):
    s = Counter(q.split(' ')); r = [-1,-1]
    
    for i,j in enumerate(inf):
        check = sum(s.get(w,0) for w in j.split(' '))
        if check != 0 and check > r[1]: r = [i,check]  
    
    return None if r == [-1,-1] else inf[r[0]]
