def find_short(s):
    return len(sorted(s.split(' '), key=len)[0])
