from functools import reduce
from operator import mul

def string_color(name):
    if len(name)<2: return None
    name = [ord(char) for char in name]
    result = hex(sum(name) % 256)[2:] + \
                 hex(reduce(mul,name) % 256)[2:] + \
                     hex(abs(name[0] - sum(name[1:])) % 256)[2:]
    return result.upper().replace('0','00') if len(result)<6 else result.upper()
