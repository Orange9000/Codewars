def is_dd(n):
    return any(int(i)==j for i,j in __import__('collections').Counter(str(n)).items())
