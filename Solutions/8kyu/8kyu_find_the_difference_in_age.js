function differenceInAges(ages){
  var max = ages[0]; var min = ages[0]
  ages.slice(1).forEach(e=> (max = Math.max(max,e), min = Math.min(min,e)))
  return [min, max, max-min]
}
