function tribonacci(sig,n){
  var res = sig
  while (res.length < n){
    res.push(res.slice(-3).reduce((x,y)=>x+y))
  }
  return res.slice(0,n)
}
