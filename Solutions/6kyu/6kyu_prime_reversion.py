from functools import reduce
from itertools import zip_longest as zlo

def solve(a,b):

    primes = []
    total  = 0
    
    for i in range(a,b):
        if is_prime(i): primes.append(i)
    for idx,prime in enumerate(primes):
        for p1,p2 in zlo([prime], primes[idx:], fillvalue=prime):
            if check([p1,p2]):
                total += 1
            
    return total 
            
    
check = lambda n: is_prime(reduce(lambda x,y: x+y, map(int, str(n[0]*n[1]))))    


is_prime = lambda n: False if n<2\
           else n==2\
           or all(n%i!=0 for i in range(2,int(n**0.5)+1))
