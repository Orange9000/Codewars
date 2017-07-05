function findDeletedNumber(arr, mixArr) {
  return arr.reduce((x,y)=>x+y,0)-mixArr.reduce((x,y)=>x+y,0)
}
