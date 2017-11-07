function sumItUp(arr){
  return arr.reduce((acc,val)=> acc+ parseInt(val[0], val[1]),0)
}
