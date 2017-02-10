import re


def decodeBits(bits):

    bits = bits.strip('0')
    unit = sorted(re.findall('1+0+|1+0+1+|1+', bits), key = lambda x: len(x))
    unit = sorted(unit, key = lambda x: ('10' in x), reverse = True)
    
    if '10' in unit[0]: unit = min(unit[0].count('1'), unit[0].count('0'))
    else: unit = len(unit[0])
    
    dashdot = {'1' * 3 * unit: '-',
               '1' * unit: '.',
               '0' * unit * 7: '   ',
               '0' * unit * 3: '  ',
               '0' * unit: ''}
    
    rgxtmplt = '1'*3*unit+'|'+'1'*unit+'|'+'0'*unit*7+'|'+'0'*unit*3+'|'+'0'*unit
    return ''.join(dashdot[v] for v in re.findall(rgxtmplt, bits))
        
    
def decodeMorse(morseCode):
    return ''.join(''.join(MORSE_CODE[j] for j in i.split('  ')) + ' ' for i in morseCode.split('   '))[:-1]
