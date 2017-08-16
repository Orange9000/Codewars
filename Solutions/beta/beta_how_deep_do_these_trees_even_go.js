function arrayDeepness(arr){
  const vals = arrDepth(arr)
  return new Object({min:Math.min(...vals),
                     max:Math.max(...vals),
                     mean:Math.round((vals.reduce((x,y)=>x+y,0)/vals.length)*1000)/1000
                     })
}
  
  
function arrDepth(arr, depth=0, res=[]) {
  if (Array.isArray(arr)){
    for (var j of arr){
      arrDepth(j, depth+1, res)
    }
  }
  else { res.push(depth) }
  return res
}
