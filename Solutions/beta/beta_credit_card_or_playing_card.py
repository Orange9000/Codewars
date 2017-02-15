import re

kwp = [(1,'game'),(3,'play'),(5,'the Ace'),
       (20,'ace of diamonds|hearts|spades|clubs'),
       (3,'dicing'),(5,'diamonds|hearts|spades|clubs')]       

kwc = [(1,'credit'),(20,'credit card'),
       (3,'bank'),(2,'banking'),(2,'cash'),
       (3,'corporate'),(5,'form of payment')]

def distinguish(text):
    score = 0
    for i,j in kwp:
        score += len(re.findall(j, text, re.IGNORECASE)) * i
    for i,j in kwc:
        score -= len(re.findall(j, text, re.IGNORECASE)) * i    
    return 'playing card' if score>0 else 'credit card' if score<0 else "I dont know"
