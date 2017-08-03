import re

def count_deaf_rats(town):
    t = town.split('P')
    return find(t[0]).count('O~') + find(t[1]).count('~O')


def find(s):
    return [''.join(j) for j in re.findall('(~O)|(O~)', s)]
