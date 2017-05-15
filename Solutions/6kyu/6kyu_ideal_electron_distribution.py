def atomic_number(e, d=[], l=1):
    return d if e <= 0 else atomic_number(e-2*l**2, d + [min(e, 2*l**2)], l+1)
