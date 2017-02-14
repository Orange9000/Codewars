def sort_ranks(ranks):
    return sorted(ranks, key=custom_sort)

def custom_sort(n):
    if '.' not in n: return int(n)
    n = [d for d in n if d in '0123456789']
    return float(n[0] + '.' + ''.join(n[1:]))
