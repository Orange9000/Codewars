def array_previous_less(arr):
    return [-1]+[search(arr[:i], arr[i]) for i in range(1, len(arr))]       
    
def search(arr, lim):
    while arr:
        found = arr.pop(-1)
        if found < lim: return found
    return -1
