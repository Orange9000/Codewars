function sumOfIntegersInString(s){
  try { return s.match(/\d+/g).reduce((x,y)=>+x + +y,0) }
  catch (TypeError) { return 0 }
}
