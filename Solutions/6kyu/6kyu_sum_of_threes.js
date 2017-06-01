function sumOfThrees(n) {
  var powers = []
  
  while (n > 0) {
    if (n == 2) { return "Impossible" }
    var pow = getPow(n)
    powers.push(pow); n -= Math.pow(3,pow)
  }
  
  return (new Set(powers)).size == powers.length ?
            powers.map(e=> '3^'+e).join('+')
            :
            "Impossible"
  
}


function getPow(lim, p=0) {
  while (true) {
    if ( Math.pow(3,p) > lim) {
      return p-1
    }
    p++
  }   
}
