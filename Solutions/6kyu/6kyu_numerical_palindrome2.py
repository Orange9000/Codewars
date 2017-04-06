from itertools import combinations_with_replacement as cwr

def palindrome(num):
    if not isinstance(num, int) or num < 0: return "Not valid"
    num = str(num)
    return search(num) if len(num) > 1 else False


def search(s):
    for i,j in cwr(range(len(s)+1), 2):
        check = s[i:j]
        if len(check) > 1 and check == check[::-1]: return True
    return False
