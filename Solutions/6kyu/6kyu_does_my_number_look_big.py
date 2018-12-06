narcissistic = lambda s: sum(int(x)**len(str(s)) for x in str(s))==s 
