import re

def convert(number):
    return ''.join(chr(int(x)).upper() for x in re.findall('\d{2}', number))
