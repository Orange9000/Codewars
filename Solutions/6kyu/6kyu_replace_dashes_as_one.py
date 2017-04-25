import re

def replace_dashes_as_one(s):
    return re.sub('(-\s*)+|(-{2,})', lambda s: '- ' if s.group(0)[-1] == ' ' else '-', s)
