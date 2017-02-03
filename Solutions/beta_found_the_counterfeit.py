from itertools import combinations as combs

def find_counterfeit(coins):
    good, found = set(), set()
    for i,j in combs(range(len(coins)),2):
        if not balanced(coins[i],coins[j]): 
            found.add(i); found.add(j)
        else:
            good.add(i); good.add(j)            
    result = [x for x in found.difference(good)]
    return result[0] if result else None
