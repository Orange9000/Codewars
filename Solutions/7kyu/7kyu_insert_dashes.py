import re

def insert_dash(num):
    return re.sub('[13579]+', lambda s: '-'.join(list(s.group(0))), str(num))
