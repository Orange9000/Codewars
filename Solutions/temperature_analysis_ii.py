def close2zero(t):
    try:
        i,j = sorted(map(int, set(t.split())), 
                  key = lambda x: abs(int(x)))[:2]
        return max(i,j) if abs(i)==abs(j) else i
    except:
        return 0
