function sequence( fun ){
  return new Seq(fun)
}

class Seq {

  constructor (func){this.func = func}
  
  take(n){
    return Array(n).fill(0).map((e,i)=>this.func(i))
  }
  
  takeWhile(cond){
    var res = []; var n = 0
    
    while (true){
      const add = this.func(n)
      if (!cond(add)){return res}
      res.push(add); n++
    }
  }
}
