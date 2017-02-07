import re

def braces_status(string):
    s = ''.join(x for x in string if x in '{}[]()')
    for i in range(len(string)//2):
        s = re.sub('\{\}|\[\]|\(\)', '', s)
    return True if not s else False
