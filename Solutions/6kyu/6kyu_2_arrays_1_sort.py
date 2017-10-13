def linked_sort(a,b,kf=''):
    mapped = sorted([(i,j) for i,j in zip(a,b)], key=kf or standard)
    bsr=[j for i,j in mapped]
  
    a.sort(key=(kf or standard))
    b.sort(key=lambda x: bsr.index(x))
    return a
    
standard = lambda x: str(x)
