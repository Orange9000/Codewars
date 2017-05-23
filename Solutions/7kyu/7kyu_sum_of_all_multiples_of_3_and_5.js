function findSum(n) {
  return Array(n+1).fill(null)
                   .map((e,i)=>i)
                   .filter(e=> e % 3 == 0 || e % 5 == 0)
                   .reduce((x,y)=>x+y, 0)
}
