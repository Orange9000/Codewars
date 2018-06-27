def fish(shoal):

    shoal=''.join(sorted(shoal))
    fishy=Fish(1)
    
    while any(int(x)<=fishy.mesize for x in shoal):
        for f in shoal:
            f=int(f)
            if f<=fishy.mesize:
                fishy.eat(f)
                shoal=shoal.replace(str(f),'',1)
    return fishy.mesize   


class Fish(object):
    def __init__(self, mesize):
        self.mesize=mesize
        self.tnxts =self.mesize*4
    def eat(self, eaten):
        self.tnxts = self.tnxts-eaten
        if self.tnxts <=0:
            self.mesize+=1
            self.tnxts=self.mesize*4-abs(self.tnxts)
