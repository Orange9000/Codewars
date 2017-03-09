function maxAndMin(arr1,arr2){
  var diffs = [];
  for (var i of arr1){
    for (var j of arr2){
      diffs.push(Math.abs(i-j))
    };
  };
  return [Math.max.apply(null,diffs), Math.min.apply(null,diffs)]
}
