from string import ascii_lowercase as AL
ABC = "nopqrstuvwxyzabcdefghijklm"

def encrypter(strng):
    return (strng.translate(str.maketrans(AL,ABC))).translate(str.maketrans(AL,AL[::-1]))
