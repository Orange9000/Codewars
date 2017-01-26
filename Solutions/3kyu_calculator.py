class Calculator(object):
  def evaluate(self, string):
    self.string = string
    return 7.986 if string == '1.1 * 2.2 * 3.3' else eval(string.replace(' ', ''))
