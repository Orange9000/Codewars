import re
from collections import Counter

d={
'|-|':'h',
'[-':'e',
'()':'o',
'3]':'b',
'_|':'l',
'|':'i',
'^|':'p',
'/`':'y',
')(':'o',
'?/':'r',
'\/':'a',
'|\|':'n',
'</':'k',
'~|~':'t',
'=/':'f',
')|':'d',
'|_|':'u',
'(':'c',
'-[':'e',
'~\_':'s',
'-[':'e',
']3':'b',
'_/~':'z',
'/\\/\\':'w',
'<>':'x',
'/\\':'v',
'|/\|':'m',
'_)(':'q',
'T_':'j',
',_(':'g',
'__':' '
}


def decode(m):
    splitters=["]","}",".","'","+"]
    splitter=[i for i,j in Counter(m).most_common()][0]
    r=[]
    for f in re.split('('+re.escape(splitter)+')+', m[::-1]):
        try: r.append(d[f])
        except: continue
    return ''.join(r)
