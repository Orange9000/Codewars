from math import factorial as fac

def strong_num(number):
    return 'STRONG!!!!' if sum(fac(int(s)) for s in str(number))==number else 'Not Strong !!'
