function solve(a,b){
  var pairs = {}
  for (var a; a<b; a++){
    const ratio=divSum(a)/a
    pairs[ratio]==undefined ? pairs[ratio]=[a] : pairs[ratio].push(a)
  }
  return Object
         .values(pairs)
         .filter(e=>e.length>=2)
         .reduce((acc,val)=> acc+Math.min(...val),0)
         
};


function divSum(n){
  var total = 0
  for (var i=1; i<n+1; i++) n%i==0 ? total+=i : undefined
  return total
}
