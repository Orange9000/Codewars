function max(){
  const vals = flatten(Object.keys(arguments).map(e=>arguments[e]))
               .map(e=>Number(e))
  if (vals.length==0) { return 0 }
  return vals.includes(NaN) ? NaN : vals.sort((a,b)=>a-b).slice(-1)[0]
}

function min(){
  const vals = flatten(Object.keys(arguments).map(e=>arguments[e]))
              .map(e=>Number(e))
  if (vals.length==0) { return 0 }
  return vals.includes(NaN) ? NaN : vals.sort((a,b)=>a-b)[0]
}


function flatten(arr, res=[]){
  if (arr.some(e=>Array.isArray(e))){
    for (var j of arr) Array.isArray(j) ? flatten(j, res) : res.push(j)
  }
  else { arr.forEach(e=>res.push(e)) }
  return res
}
