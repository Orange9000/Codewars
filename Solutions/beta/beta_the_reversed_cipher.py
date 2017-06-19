def encode(s):
    return ' '.join(x[::-1][1:]+x[-1] for x in s.split(' '))
