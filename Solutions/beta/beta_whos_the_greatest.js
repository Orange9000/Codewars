function isGreaterThan(x, y){
  var [a,b]=[x,y].map(e=>(''+e).replace(/^0+/, ''))
  return a.length>b.length ? true : a.length<b.length ? false : trans(a)>trans(b)
}

function trans(n){
  return [...n].reverse().map((e,i)=>Math.pow(+e,i+1)).reduce((x,y)=>x+y,0)
}
