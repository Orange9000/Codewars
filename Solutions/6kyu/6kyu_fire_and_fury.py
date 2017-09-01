import re
from itertools import groupby

FY={1:'I am furious.',2:'I am really furious.',3:'I am really really furious.'}
FI={1:'You are fired!',2:'You and you are fired!',3:'You and you and you are fired!'}


def fire_and_fury(tweet):
    if not re.fullmatch('[EFIRUY]+', tweet): return 'Fake tweet.'
    return  ' '.join(FY.get(len(k), plur(len(k),'y')) if 'FURY' in k else FI.get(len(k), plur(len(k),'i'))
                    for k in
                        (list(g)
                             for i,g in
                             groupby(
                                     w.group(0) for w in
                                     re.finditer('FURY|FIRE', tweet)
                                      )
                        )
                   ) or "Fake tweet."

def plur(k,v):
    if v=='y': return 'I am ' + ' '.join(['really']*(k-1)) + ' furious.'
    return 'You ' + ' '.join(['and you']*(k-1)) + ' are fired!'
