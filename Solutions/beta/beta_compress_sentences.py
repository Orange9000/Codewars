def compress(sentence):
    if not sentence: return ''
    mapped={}; counter=0
    for i in sentence.lower().split(' '):
        if i not in mapped: mapped[i]=counter; counter+=1
    return ''.join(str(mapped[w.lower()]) for w in sentence.split(' '))
