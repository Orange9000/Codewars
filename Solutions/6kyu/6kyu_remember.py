def remember(str_):
    seen = set(); res = []
    for i in str_:
        if i in seen and i not in res: res.append(i)
        seen.add(i)
    return res
