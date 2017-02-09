from operator import mul

def unique_digit_products(a):
    return len({reduce(mul, map(int, str(x))) for x in a})
