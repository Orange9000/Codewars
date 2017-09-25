function isOddHeavy(n){
  const m=Math.max(...n.filter(e=>e%2==0))
  return n.some(e=>e%2!=0)&&n.every(e=>e%2!=0 ? e>m : true)
}
