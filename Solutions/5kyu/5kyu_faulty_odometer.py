BASE = '012356789'

def faulty_odometer(num):
    result = 0
    for i, n in enumerate(str(num)[::-1]):
        result += BASE.index(n) * len(BASE) ** i
    return result
