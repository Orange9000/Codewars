reverse_invert = lambda lst: list(map(lambda x: make(x), filter(lambda x: isinstance(x, int), lst)))


make = lambda n: int(str(abs(n))[::-1])*(-1 if n>0 else 1)
