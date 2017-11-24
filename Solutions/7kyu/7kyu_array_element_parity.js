function solve(arr){
  var td={};
  for (var n of arr) {
    var key=Math.abs(n)
    td[key]==undefined ? td[key]=new Set([n]) : td[key].add(n)
  }
  for (var n of Object.values(td)) if (n.size==1) return [...n][0]
};
