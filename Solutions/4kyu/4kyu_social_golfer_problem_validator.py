def valid(a):
    golfers = set(''.join(''.join(x) for x in a))
    each    = dict((x, golfers-{x}) for x in golfers)
    arrlen  = sum(len(x) for x in a)/len(a)         
    
    for arr in a:
        
        '''exactly once a day and len checks'''
        day = ''.join(arr)
        if set(day) != golfers or len(arr) != arrlen: 
            return False
        for j in day:
            if day.count(j) > 1:
                return False

        '''
        once with each at most
        group = AB; {A: {B,C,D}, B: {A,C,D}
        A played with B => A: {C,D}
        B played with A => B: {C,D}
        '''
        for group in arr:
            for golfer in group:
                out  = [x for x in group if x != golfer]
                derp = each[golfer]
                for j in out:
                    try:
                        derp.remove(j)
                    except KeyError: 
                        return False    
                each[golfer] = derp    
                    
    return True
