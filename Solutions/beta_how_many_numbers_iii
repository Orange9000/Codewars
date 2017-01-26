def find_all(sd, d):
    if sd/d > 9:
        return []

    res, ln = [], 0
    for i in partitions(sd):
        if filter(lambda x: len(str(x))>1, i):
            break
        if len(i)==d and sum(i) == sd:
            res.append(int(''.join(map(str,i))))
            ln +=1
    
    return [ln, res[-1], res[0]] if res else []

    
def partitions(n):
    '''http://code.activestate.com/recipes/218332/'''
    # base case of recursion: zero is the sum of the empty list
    if n == 0:
        yield []
        return
		
    # modify partitions of n-1 to form partitions of n
    for p in partitions(n-1):
        yield [1] + p
        if p and (len(p) < 2 or p[1] > p[0]):
            yield [p[0] + 1] + p[1:]
