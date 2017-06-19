import re

TACODICT = {
             't':'tomato', 
             'l':'lettuce',
             'c':'cheese',
             'g':'guacamole',
             's':'salsa'
           }

def tacofy(word):
    return ['shell'] + [TACODICT.get(c, 'beef') for c in re.sub('[^aeioutlcgs]+' ,'', word.lower())] + ['shell']
