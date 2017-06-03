NUMBERS = ['zero','one','two','three','four','five',
           'six','seven','eight','nine','ten','eleven',
           'twelve','thirteen','fourteen','fifteen','sixteen',
           'seventeen','eighteen','nineteen','twenty']

class Arith():
    def __init__(self, a):
        self.a = a
    def add(self, b):
        return NUMBERS[ 
                       NUMBERS.index(self.a) +
                       NUMBERS.index(b)
                       ]
