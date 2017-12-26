function diagonal(arr) {
  var r=[]; const l=arr.length
  //starting coords for diagonals
  //beginning at bottom left corner
  var c=[...Array(l)].map((e,i)=>[i,0])
        .concat(
          [...Array(l-1)].map((e,i)=>[l-1,i+1])
               )
  for (var j of c){
    while (1){
      try { r.push(arr[j[0]][j[1]]) ; j=[j[0]-1,j[1]+1] }
      catch (e) { break }
    }
  }
  return r.filter(e=>e!=undefined).reverse()
}
