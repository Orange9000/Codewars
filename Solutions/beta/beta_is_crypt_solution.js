function isCryptSolution(crypt, solution) {
  var sol=solution.reduce(function (obj,n){obj[n[0]]=n[1]; return obj},{})
  var c = crypt.map(e=>[...e].map(c=>sol[c]).join``)
  if (c.some(e=>/^0.+/.test(e))) return false
  return eval(c[0])+eval(c[1])==parseInt(c[2])
}
