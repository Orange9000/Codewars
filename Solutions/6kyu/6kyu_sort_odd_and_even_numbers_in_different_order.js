function sortArray(array) {
  var evens=[]; var odds =[]; var res  =[];
  for (var j of array.slice().sort((a,b)=>a-b)) j%2==0 ? evens=[j].concat(evens) : odds.push(j)
  array.forEach(e=>e%2!=0 ? res.push(odds.shift()) : res.push(evens.shift()))
  return res
}
