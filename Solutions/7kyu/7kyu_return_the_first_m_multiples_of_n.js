function multiples(m, n){
  return Array(m+1).fill(n).map((e,i)=>e*i).filter(e=>e!=0)
}
