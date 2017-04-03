from itertools import combinations_with_replacement as cwr

def palindrome(num):
    if not isinstance(num, int) or num < 0: return "Not valid"
    
    num = str(num)
    count = 0
    
    # generate indexes for all possible list slices
    for i,j in cwr(range(len(num)+1),2):
        check = num[i:j]
        if check == check[::-1] and len(check)>1: count += 1
    
    return count
