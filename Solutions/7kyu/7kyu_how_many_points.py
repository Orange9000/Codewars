def get_los_angeles_points(results):
    return sum(int(j.split(':')[0]) for i,j in results if __import__('re').fullmatch('Los\sAngeles\s[a-zA-Z]+$', i))
