def pattern(n):
    l=list(range(1,n+1))
    return '\n'.join(''.join(map(str,l[i:])) for i in range(n))
