import re
from collections import Counter

def is_isogram(word):
    if not isinstance(word, str) or word == '': return False
    word = {j for i,j in Counter(
                                 re.sub('[^a-z]', '', word.lower())
                                 ).most_common()
                                                }
    return len(word) == 1
