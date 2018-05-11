function maxNumber(n){
  return +([...(''+n)].sort((a,b)=>+b - +a).join``)
}
