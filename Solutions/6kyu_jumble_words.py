from random import shuffle

def jumble(string):
    res = __import__('re').sub('\w{3,}', lambda w: mix(w.group(0)), string)
    return res

        
def mix(s):
    mixed = list(s[1:-1])
    shuffle(mixed)
    return s[0] + ''.join(mixed) + s[-1]
