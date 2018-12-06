import re

r={
'111':1000,
'666':600,
'555':500,
'444':400,
'333':300,
'222':200,
'1':100,
'5':50
}

def score(dice):
    s=0
    for f in re.finditer(r'(.)\1{2}|.', ''.join(map(str,sorted(dice)))):
        try: s+= r[f.group()]
        except: pass
    return s
