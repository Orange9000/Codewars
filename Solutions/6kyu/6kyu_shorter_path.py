from collections import Counter
from functools import reduce

PAIRS = {'N':'S','S':'N','E':'W','W':'E'}

def directions(goal):
    c=Counter(goal)
    return list(
              reduce(lambda x,y: x+y, 
                 [[d]*(c[d] - c[PAIRS[d]]) for d in 'NSEW']
                    )
               )
