RESULT = 'Total proteins: {:.10g} grams, Total calories: {:.10g}'

import re
from functools import reduce

def bulk(arr):
    if not arr: return RESULT.format(0,0)
    
    vals  = [
             [
              food[j][0]*int(i)/100,
              (food[j][0]+food[j][1])*(int(i)/100)*4 + food[j][2]*(int(i)/100)*9
             ] 
               for i,j in 
                 re.findall(
                    '(\d+)g\s([a-z]+)',
                    str(reduce(lambda x,y: x+' '+y, arr, ''))
                    )
                    ]
        
    return RESULT.format(
                        sum(map(lambda x:x[0], vals)),
                        sum(map(lambda x:x[1], vals))
                        )
