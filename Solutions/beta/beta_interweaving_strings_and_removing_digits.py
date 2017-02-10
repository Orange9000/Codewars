from itertools import zip_longest as zlo
from string import digits

interweave = lambda a,b: ''.join((i if i not in digits else '')+(j if j not in digits else '') for i,j in zlo(a, b, fillvalue = ''))
