from itertools import zip_longest as zlo

def how_many_bees(hive):
    return sum(''.join(x).count('bee') + ''.join(x).count('eeb') for x in hive) + \
           sum(''.join(y).count('bee') + ''.join(y).count('eeb') for y in zlo(*hive, fillvalue = '')) if hive else 0
