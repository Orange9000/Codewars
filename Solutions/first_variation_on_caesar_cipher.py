from string import ascii_lowercase as AL
from math import ceil

def moving_shift(s, shift, decode = False):

    result = ''
    
    for i,j in enumerate(''.join(s)):
        if j.isalpha():
            index = AL.index(j.lower())
            
            if decode:
                nidx    = (index-shift-i)
                current = nidx if nidx > 0 else nidx if abs(nidx) < 26 else (abs(nidx) % 26 * -1)
            elif not decode:
                nidx    = (index+shift+i)
                current = nidx if nidx < 26 else nidx % 26
                
            result += AL[current].upper() if j.isupper() else AL[current]
        else: result += j
        
    if decode: return ''.join(result)    
    
    part = int(len(s)/5 if len(s)%5==0 else ceil(len(s)/5.0))
    
    final = []
    for i in range(0, len(s), part):
        try:    final.append(result[i:i+part])
        except: final.append(result[i+part:])
        
    return final if len(final) == 5 else final + ['']   

def demoving_shift(s, shift):
    return moving_shift(s, shift, True)
