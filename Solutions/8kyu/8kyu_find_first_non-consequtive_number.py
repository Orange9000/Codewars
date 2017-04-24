def first_non_consecutive(arr):
    for i,j in zip(range(arr[0], arr[-1]+1), arr):
        if i != j: return j
