import re

P = 'This Rhinestone Cowboy has {} dollar bills in his right boot and {} in the left' 

def cowboys_dollars(boots):
    def count(b):
        return len(re.findall('\|\[\(1\)\]\|', b))
    return P.format(count(boots[1]),count(boots[0]))
