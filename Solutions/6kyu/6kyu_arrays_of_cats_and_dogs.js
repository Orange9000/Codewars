function solve(arr,n){
  var caught = new Set();
  const a = arr.map((e,i)=>[i,e])
  
  //iterating over indexes of 'D'
  for (var j of a.filter(e=>e[1]=='D').map(e=>e[0])){
    for (var p of a.slice().slice(Math.max(j-n,0),j+n+1)) {
      /*searching for 'C' in a slice of
      n steps back and n steps forward
      of current index of 'D'
      leftmost never before caught 'C'
      is the one we need*/
      if (p[1]=='C' && !caught.has(p[0])) { caught.add(p[0]); break }
    }
  }
  
  return caught.size
}
