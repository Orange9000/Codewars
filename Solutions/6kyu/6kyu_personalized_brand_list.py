from collections import OrderedDict

def sorted_brands(history):
    poplr=OrderedDict()
    for i in history:
        try:    poplr[i['brand']]+=1
        except: poplr[i['brand']]=1
    return sorted(poplr.keys(), key=lambda x: poplr[x], reverse=1)
