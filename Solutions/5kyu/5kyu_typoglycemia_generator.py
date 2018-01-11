from string import ascii_lowercase as AL

def scramble_words(words):
    return ' '.join( process(list(w)) if w else '' for w in words.split(' '))


def process(word):
    idx=[]
    chars=[]
    
    for i,j in enumerate(word):
      if j in AL:
        idx.append(i); chars.append(j)
    
    for i,j in enumerate(sorted(chars[1:-1]),1):
      word[idx[i]]=j
      
    return ''.join(word)
