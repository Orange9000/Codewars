function condense (str){
  return str.split(' ')
            .reduce((x,y)=> x.endsWith(y)? x :cmp(x,y))
}

function cmp(a,b){
  var idx = -1
  while (Math.abs(idx)<b.length){
    if (a.endsWith(b.slice(0,idx))) { return a+b.slice(idx) }
    idx--
  }
  return a+b
}
