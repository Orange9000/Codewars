var largestDifference = function(data) {
  const arrLen = data.length
  var diff = 0
  for (var i=0; i<arrLen; i++){
    for (var j=i+1; j<arrLen; j++){
      data[i]<=data[j] ? (j-i) > diff ? diff = j-i : undefined : undefined
    }
  }
  return diff
};
