from functools import reduce

def digital_root(n):
    while n>10:
        n = reduce(lambda x,y: x+y, [int(d) for d in str(n)])
    return n
