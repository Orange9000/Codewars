import re

ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

def spreadsheet(s):
    if re.fullmatch('[A-Z]+\d+', s):
        return 'R' + re.findall('\d+', s)[0] + 'C' + from_base_26(re.findall('[A-Z]+', s)[0])
    else:
        return to_base_26(re.findall('\d+', s)[1]) + re.findall('\d+', s)[0]


def to_base_26(num):

    num    = int(num)
    result = ''
    if num < 26:
        return ALPHA[num-1]
    
    while num > 0:
        if num % 26 == 0: 
            result += 'Z'; num = int(num / 26) - 1
        else:
            result += ALPHA[(num % 26) - 1]; num = int(num / 26)
    
    return result[::-1]


def from_base_26(s):
    result = 0
    for i,n in enumerate(str(s)[::-1]):
        result += (ALPHA.index(n)+1) * 26**i
    return str(result)
