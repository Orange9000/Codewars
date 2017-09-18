function computeDepth (x, mul=1){
  var found = new Set(); var count = 0
  while (found.size < 10){
    for (var j of ''+x*mul) found.add(j)
    mul++; count++
  }
  return count
}
