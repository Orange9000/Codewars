function sumNested (arr,res=[]) {
  for (var e of arr) Array.isArray(e) ? sumNested(e,res) : res.push(e)
  return res.length!=0 ? res.reduce((x,y)=>x+y) : 0
}
