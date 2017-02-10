def snail(array):
    res = [[]]
    while True:
        try:
            res.append(array.pop(0))
            res.append([x.pop(-1) for x in array])
            res.append(array.pop(-1)[::-1])
            res.append([x.pop(0) for x in array][::-1])
        except:
            break
    return sum(res, [])
