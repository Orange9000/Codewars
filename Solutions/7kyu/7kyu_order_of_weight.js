function arrange(arr){
  return arr.sort((a,b)=>cs(a)-cs(b))
}

function cs(n){
  const toGr = {'KG':'*1000', 'G':'*1', 'T':'*1e6'}
  return eval(n.replace(/[A-Z]+/, s=>toGr[s]))
}
