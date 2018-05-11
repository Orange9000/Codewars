def quadratic_gen(a,b,c,start=0,step=1):
    while 1:
      rval=[start, a*(start**2)+b*start+c]
      start += step
      yield rval
