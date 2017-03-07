from itertools import zip_longest as zlo

def decrypt(enc, n):
    
    if not isinstance(enc, str): return None
    
    part = len(enc)//2
    for rep in range(n):
        a,b = enc[:part], enc[part:]
        enc = ''.join(j+i for i,j in zlo(a,b, fillvalue = ''))
    return enc 


def encrypt(text, n):

    if not isinstance(text, str): return None

    for rep in range(n):
        a,b = '',''
        for i,j in enum(text):
            if i % 2 == 0: a += j
            else:          b += j
        text = a + b
    return text    


def enum(strg):
    # enumerate starting from 1
    counter = 1
    for char in strg:
        yield (counter, char)
        counter += 1
