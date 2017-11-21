from collections import OrderedDict as od

def first_non_repeated(s):
    d=od()
    for c in s:
        try:   d[c]+=1
        except:d[c]=1
    for key,val in d.items():
        if val==1: return key
