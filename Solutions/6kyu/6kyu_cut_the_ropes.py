def cut_the_ropes(arr):
    res = [len(arr)]
    arr = sorted(arr)
    while True:
        arr = list(filter(bool, map(lambda x: x - arr[0], arr)))
        if arr:
            res.append(len(arr))
        else:
            return res
