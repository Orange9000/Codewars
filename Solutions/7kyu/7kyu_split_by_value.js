function splitByValue(k, elements){
  var mins=[]; var maxs=[];
  elements.forEach(e=>e<k ? mins.push(e) : maxs.push(e))
  return mins.concat(maxs)
}
