from random import shuffle

def rota(rooms):
    shuffle(rooms)
    return (rooms+(rooms*7))[:7]
