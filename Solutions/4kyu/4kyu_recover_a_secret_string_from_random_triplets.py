from functools import reduce
from itertools import zip_longest as zlo

def recoverSecret(triplets):
	
    first, last = '', ''
    checker = list(zip(*triplets))
    
    # finding first letter
    for i in checker[0]:
        if i not in (checker[1] + checker[2]):
            first = i
    
    # finding last letter
    for i in checker[2]:
        if i not in (checker[0] + checker[1]):
            last = i    
    
    # if char has no chars before it
    # in [triplets], then that's the
    # one we need
    while True: 

        # removing all occurences of
        # a previously found letter
        triplets = [[x for x in y if x != first[-1]] for y in triplets]
        checker  = list(zlo(*triplets))
		
        if len(checker) > 1:
            for i in checker[0]:
                if i not in list(reduce(lambda x,y: x + y, checker[1:])): 
                    first += i
                    break
        else:
            return first + last
