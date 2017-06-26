function climb(n, res=[n]){
  return n == 1 ? [1] : res[0]==1 ? res : climb(n, [Math.floor(res[0]/2)].concat(res)) 
}
