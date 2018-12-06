function narcissistic(v) {
  return [...''+v].reduce((x,y)=>x+Math.pow(+y,(''+v).length),0)==v
}
