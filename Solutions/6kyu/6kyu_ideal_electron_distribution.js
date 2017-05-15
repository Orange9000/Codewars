function atomicNumber(num, e=[], l=1) {
  return num <= 0 ? e : atomicNumber(num - 2*Math.pow(l,2), 
                                     e.concat([Math.min(num, 2*Math.pow(l,2))]), 
                                     l+1)
}
