import re

def soundex(name):
    return ' '.join(process_word(word).upper()
                       for word in 
                         name.split(' ')
                          )   


def process_word(word):
    fl = word[0]
    word = word.lower()
    word = word[0] + re.sub('[hw]', '', word[1:])
    word = word.translate(str.maketrans('bfpvcgjkqsxzdtlmnr','111122222222334556'))
    word = re.sub(r'(\d)(\1)+', lambda d: d.group()[0], word)
    word = word[0] + re.sub('[aeiouy]', '', word[1:])
    if word[0].isdigit(): word = fl + word[1:]
    return (word + '000')[:4] if len(re.findall('\d', word)) < 3 else word[:4]
