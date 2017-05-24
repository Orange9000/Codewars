import re

def look_and_say_sequence(fe, n):
    return fe if n == 1\
                 else look_and_say_sequence(
                         ''.join(
                                 str(len(n.group())) + n.group()[0] 
                                     for n in re.finditer(r'(.)\1*', fe)
                                 )   
                                 ,n-1)
