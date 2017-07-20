const ops = {'pl':'+', 'mi':'-', 'di':'/', 'mu':'*'}

class WordProblem{
  constructor (s) { this.s = s }
  answer(){
    if (!/plus|minus|divided by|multiplied by/.test(this.s)) { throw new ArgumentError() }
    return this.s
               .match(/-?\d+|(plus|minus|divided by|multiplied by)\s-?\d+/g)
               .reduce(function (num, op){
                         var num2 = Number(op.match(/-?\d+/g));
                         return eval(`${num}${ops[op.slice(0,2)]}${num2}`.replace(/(\-\-)|(\+\+)/g, '+'));
                       })                  
  }
}

function ArgumentError(){
}
