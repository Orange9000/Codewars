from itertools import groupby

def pick_peaks(arr):

    res = {'pos':[], 'peaks':[]}
    if not arr: return res
    
    #[A,B,B,C,D,D,E] => [[A],[B,B],[C],[D,D],[E]]
    #see enum() below
    #[[A],[B,B],[C],[D,D],[E]] = > [0:[A],1:[B,B],3:[C],4:[D,D],6:[E]]
    arr = dict(enum(list(j) for i,j in groupby(arr)))
         
    #storing keys to be able to find
    #previous value and the next one
    keys = sorted(arr.keys())
    
    for i in arr:
        
        #excluding edges
        if i != keys[0] and i != keys[-1]:
        
            current  = arr[i][0]
            previous = arr[keys[keys.index(i) + 1]][0]
            post     = arr[keys[keys.index(i) - 1]][0]
            
            if current > post and current > previous:
                res['pos']   = res['pos'] + [i]
                res['peaks'] = res['peaks'] + [arr[i][0]]
    return res
    
def enum(a):
    #enumerate groups of elements based 
    #on the ordinal position of the first 
    #element of a group in a flattened list
    i = 0
    for j in a:
        if len(j) == 1:
            yield(i,j)
            i += 1
        else:
            yield(i, j)
            i += len(j)  
