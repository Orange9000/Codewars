const matrixSquareUp = b => {
  return Array(b)
         .fill(
            [...Array(b)].map((e,i)=>''+(i+1)).reverse()
               )
               .map((e,i)=>[...Array(b-(i+1))].map(e=>'x').concat(e.slice(-i-1))
                   )
}
