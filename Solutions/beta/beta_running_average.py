class running_average(object):
    def __init__(self):
        self.vals = []
    def __call__(self, val):
        self.vals.append(val)
        return round(sum(self.vals)/len(self.vals),2)
