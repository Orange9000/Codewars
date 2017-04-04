import re

def palindrome(num):
    if not isinstance(num, int) or num < 0: return "Not valid"
    num = str(num)
    return bool(re.findall(r'(\d)\1', num)) or num == num[::-1] and len(num)>1
