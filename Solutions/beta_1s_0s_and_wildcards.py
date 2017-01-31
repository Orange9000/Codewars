from itertools import combinations
from functools import reduce

possibilities = lambda a: [check(x) for x in combinations('01', len(a))]
check = lambda a,b: a if all([i==j for i,j in zip(a,b) if j!='?']) else False
