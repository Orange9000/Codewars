from functools import reduce

def sel_reverse(arr,l):
    if l == 0:       return arr
    if l > len(arr): return arr[::-1]
    return reduce(lambda x,y: x+y, (arr[i:i+l][::-1] for i in range(0, len(arr), l)))
