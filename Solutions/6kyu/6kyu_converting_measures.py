import re
from math import ceil

C={'tbsp':15,'tsp':5}

def convert_recipe(recipe):
    r       =recipe+''
    measures=re.findall('([\d\/]+) (tbsp|tsp)', recipe)
    grams   =[" ("+str(ceil(eval(f[0])*C[f[1]]))+"g)" for f in measures]
    for j in measures:
        j=' '.join(j)
        r=r.replace(j,j+grams.pop(0),1)
    return r
