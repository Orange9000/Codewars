def nth_smallest(arr, n):
    try:
        return sorted(set(arr))[n-1]
    except IndexError:
        return None
