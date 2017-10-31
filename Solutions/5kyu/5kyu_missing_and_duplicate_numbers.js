unction solution(array) {
  var m=null; var d=null
  var seen=new Set()
  var tot=0
  var len=0
  
  for (var j of array){
    if (seen.has(j)){d=j}
    seen.add(j)
    tot+=j
    len++
  }
  
  return [(len*(len+1)/2)-(tot-d),d]
  
  
}
