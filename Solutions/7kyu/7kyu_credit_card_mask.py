import re

def maskify(cc):
    return re.sub('.','#', cc[:-4]) + cc[-4:]
