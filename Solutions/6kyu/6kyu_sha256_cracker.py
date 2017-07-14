import hashlib
from itertools import permutations

def sha256_cracker(hash, chars):
    for i in permutations(chars):
        word = ''.join(i)
        if hashlib.sha256(word.encode()).hexdigest() == hash: return word
