from random import randint
from functools import reduce

BINGO=[
['B',[1,15], 5],
['I',[16,30],5],
['N',[31,45],4],
['G',[46,60],5],
['O',[61,75],5]
]


def get_bingo_card():
    return list(reduce(lambda x,y: x+y, 
              [[char+n for n in gen(rng,lim)] for char,rng,lim in BINGO]
              ))       
                
    
def gen(rng, lim):
    nums=[]; used=set()
    while len(nums)!=lim:
        n=randint(rng[0], rng[1])
        if n not in used:
            nums.append(str(n))
            used.add(n)
    return nums
