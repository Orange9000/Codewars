function adjacentElementsProduct(array) {
  var res=[];
  array.forEach((e,i)=>res.push(e*array[i+1]));
  return Math.max(...res.filter(e=>!isNaN(e)))
}
