from string import ascii_letters as AL
import re

class Plugboard(object):
    def __init__(self, wires=''):
        if len(wires)%2!=0 or len(wires)>20 or len(set(wires))!=len(wires):
            raise ValueError('Error!')
            
        self.pairs = {i:i for i in AL}
        
        for i,j in re.findall('.{2}', wires):
            self.pairs[i]=j
            self.pairs[j]=i
        
    def process(self, c):
        try: return self.pairs[c]
        except KeyError: return c
