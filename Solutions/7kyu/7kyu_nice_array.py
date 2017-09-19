def is_nice(arr):
    return all(i+1 in arr or i-1 in arr for i in arr) if arr else 0
