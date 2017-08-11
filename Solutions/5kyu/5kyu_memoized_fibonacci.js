var fibs = [1,1]

function prefill(){
  for (var i=1; i<10001; i++){
    fibs.push(fibs.slice(-2).reduce((x,y)=>x+y))
  }
}

prefill()

var fibonacci = function(n) {
  return fibs[n-1]
}
