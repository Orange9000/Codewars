ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

def base64_to_base10(s):
    return sum(ALPHABET.index(j)*64**i for i,j in enumerate(s[::-1]))
