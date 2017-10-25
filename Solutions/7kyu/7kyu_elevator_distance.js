function elevatorDistance(array) {
  return array.map((e,i)=>Math.abs(e-array[i+1])).filter(e=>e).reduce((x,y)=>x+y)
}
