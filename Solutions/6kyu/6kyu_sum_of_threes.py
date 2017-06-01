def sum_of_threes(n):
    
    powers = []

    while n > 0:
        if n == 2: return 'Impossible'
        res = gen_power(n); n -= pow(3, res)
        powers.append(res)

    return '+'.join('3^'+str(p) for p in powers) \
               if len(set(powers)) == len(powers) else 'Impossible'
    
    
def gen_power(lim, p=0):
    while True:
        if pow(3,p) > lim:
            return p-1
        p += 1
