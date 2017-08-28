function stantonMeasure(arr){
  var counter = new Object();
  arr.forEach(e=>counter[e]==undefined ? counter[e]=1 : counter[e]++)
  return counter[counter[1]]||0
}
