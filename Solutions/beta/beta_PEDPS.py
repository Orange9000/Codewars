def pf(n):
    if all([bool(c in '02468') for c in str(n)]) and\
       float.is_integer(pow(n, 0.5)): return True
    return False

memo = []

for i in range(8, pow(10,6)+1):
    i = i*i
    if pf(i): memo.append(i)
    

def even_digit_squares(a, b):
    return [num for num in memo if num>=a and num<=b]
