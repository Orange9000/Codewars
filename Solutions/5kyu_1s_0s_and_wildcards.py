from itertools import product

def possibilities(a):
    a = a.replace('?', '{}')
    return [a.format(*x) for x in product('01', repeat=a.count('{}'))]
