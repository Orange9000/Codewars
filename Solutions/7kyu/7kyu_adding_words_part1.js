NUMBERS = ['zero','one','two','three','four','five',
           'six','seven','eight','nine','ten','eleven',
           'twelve','thirteen','fourteen','fifteen','sixteen',
           'seventeen','eighteen','nineteen','twenty']

class Arith{
  constructor (a) { this.a = a }
  
  add(b) 
  { 
    return NUMBERS[ NUMBERS.indexOf(this.a) + NUMBERS.indexOf(b) ] 
  }                  
}
