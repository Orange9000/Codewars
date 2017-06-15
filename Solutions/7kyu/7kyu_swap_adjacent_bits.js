function swapAdjacentBits( n, bin = n.toString(2).split('') ) {
  if (bin.length%2!=0) { bin = ['0'].concat(bin) }
  return parseInt(
                  bin.map((e,i)=> i%2==0 ? bin[i+1] : bin[i-1])
                     .join('')
                  ,
                  2)
}
