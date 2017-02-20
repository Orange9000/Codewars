import numpy as np

def animals(heads, legs):
    if not all([d >= 0 for d in [heads,legs]]):
        return "No solutions"
        
    a = np.array([[2,4],[1,1]])
    b = np.array([legs,heads])
    result = []
    
    for d in np.linalg.solve(a,b):
        if d==int(d) and d>=0:
            result.append(d)
        else:
            return "No solutions"
    return tuple(result)        
