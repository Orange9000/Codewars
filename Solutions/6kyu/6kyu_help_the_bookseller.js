function stockList(a, b){
  if (!a.length) return ''
  var res=b.reduce(function(obj,n){obj[n]=0; return obj},{})
  a.forEach(e=>b.includes(e[0]) ? res[e[0]]+= +(e.match(/\d+/)[0]) : undefined)
  return b.map(e=> `(${e} : ${res[e]})`).join(' - ')
}
