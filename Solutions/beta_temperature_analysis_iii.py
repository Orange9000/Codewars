from numpy import median as med, mean

class Temperature:
    def __init__(self, data=[0]):
        self.data    = data
        self.highest = max(data)
        self.lowest  = min(data)
        self.median  = med(data)
        self.average = mean(data)
        for i in self.__dict__:
            call = self.__dict__[i]
            try:   
                self.__setattr__(i, round(float(call), 1))
            except TypeError: 
                self.__setattr__(i, list(map(lambda x: round(x,1), call)))
    def __str__(self):
        return 'Max: {} Min: {} Median: {} Average: {}'.format(
                    self.highest, self.lowest, self.median, self.average)
