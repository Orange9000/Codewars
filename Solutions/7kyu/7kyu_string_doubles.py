import re

def doubles(s):
    res=''.join(c.group() for c in re.finditer(r'(.)\1|.', s) if len(c.group())==1)
    return doubles(res) if res!=s else res
