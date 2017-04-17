persistence = lambda n,r=0: r if len(str(n)) == 1 else persistence(reduce(lambda x,y: x*y, map(int, str(n))), r+1)
