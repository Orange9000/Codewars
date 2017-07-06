from collections import Counter

NUMS = {
        'ZERO':'0','EIGHT':'8','SIX':'6','SEVEN':'7',
        'THREE':'3','FOUR':'4','FIVE':'5','NINE':'9',
        'TWO':'2','ONE':'1'
        }
        
KEYS = [ 'ZERO','EIGHT','SIX','SEVEN',
         'THREE','FOUR','FIVE','NINE',
         'TWO','ONE' ]         


def original_number(s):
    res = ''; counted = Counter(s)
    for key in KEYS:
        while all(counted[char]>0 for char in key):
            for char in key:
                counted[char] -= 1
            res += NUMS[key]
    return ''.join(sorted(res))
