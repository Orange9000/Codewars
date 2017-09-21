from math import ceil

def is_centered(arr,n):
    return any(sum(arr[i:-i])==n for i in range(ceil(len(arr)/2))) or sum(arr)==n
