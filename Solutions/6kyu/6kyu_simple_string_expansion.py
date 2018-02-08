import re

def solve(st):
    while 1:
        f=re.search('[0-9a-z]+\([a-z]+\)',st)
        if not f: return st
        st=st.replace(f.group(), flatten(f.group()))


def flatten(inp):
    return re.sub('([a-z]+)?(\d+)?(\([a-z]+\))',
              lambda s: (s.group(1) or '')+int(s.group(2) or '1')*s.group(3).strip('()')
                 , inp)
