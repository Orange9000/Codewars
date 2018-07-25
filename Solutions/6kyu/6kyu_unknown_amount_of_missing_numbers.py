def miss_nums_finder(arr):
    mval=max(arr); arr_=set(arr)
    return [i for i in range(1, mval+1) if i not in arr_]
