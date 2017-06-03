from string import ascii_lowercase as AL

def caesar(pt,shift):
    al = AL[shift:] + AL[:shift]
    return pt.translate(str.maketrans(AL+AL.upper(), al+al.upper()))
