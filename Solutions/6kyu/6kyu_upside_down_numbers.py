ROT={'1':'1','6':'9','9':'6','8':'8','0':'0'}

def solve(a, b):
    return sum(1 if ud(n) else 0 for n in range(a,b))
        
        
def ud(n):
    try: return n==int(''.join(ROT[i] for i in str(n)[::-1]))
    except: return False
