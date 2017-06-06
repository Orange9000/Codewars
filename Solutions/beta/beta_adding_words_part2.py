import re

ss = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
     'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen','twenty',
     'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred']
nn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90, 100]

class Arith():
    def __init__(self, a):
        self.a = self.to_num(a)
    def add(self, b):
        return self.to_str( self.a + self.to_num(b) )
    def to_num(self, s):
      
        return sum(
                   nn[ ss.index( i[0].split(' ')[0] ) ]*100 if 'hundred' in i[0] else
                       nn[ ss.index( ''.join(i) )]   
                         for i in re.findall('([a-z]+\shundred)|([a-z]+ty)|([a-z]+)', s.replace('and',''))
                   )
                   
    def to_str(self, n):
  
        n = [int(i)*j for i,j in zip(str(n)[::-1], [1,10,100,1000])][::-1]
        if 10 in n: n = n[:-2] + [n[-1]+n[-2]]
        
        n = ' '.join('{} thousand and'.format(ss[ nn.index(i/1000)]) if i>=1000 else
                     '{} hundred and'.format(ss[ nn.index(i/100) ]) if i>=100 else
                     '{}'.format(ss[ nn.index(i) ]) for i in [d for d in n if d !=0]
                     )
        
        if 'thousand' in n and 'hundred' in n: n = n.replace('thousand and', 'thousand')
        
        return n if not n.endswith('and') else n.replace(' and','')
