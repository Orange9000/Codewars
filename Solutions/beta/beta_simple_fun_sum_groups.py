from itertools import groupby

def sum_groups(arr):
    newarr = [sum(j) for i,j in groupby(arr, key = lambda x: x % 2 == 0)]
    return len(newarr) if newarr == arr else sum_groups(newarr)
