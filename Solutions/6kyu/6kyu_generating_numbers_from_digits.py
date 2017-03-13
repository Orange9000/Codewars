from math import factorial as fac
from operator import mul

def proc_arr(arr):
    arr = ''.join(sorted(arr))
    try:
        total = fac(len(arr))/reduce(mul, [fac(arr.count(x)) for x in set(arr) if arr.count(x)>1])
    except:
        total = fac(len(arr))
    return [total, int(arr), int(arr[::-1])]
