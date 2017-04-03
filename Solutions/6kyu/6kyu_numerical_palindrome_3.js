function palindrome(num) { 
  if (typeof num != 'number' || num < 0 || num % 1 != 0) { return 'Not valid' }
  var num = String(num)
  var count = 0
  for (var i of genIndexes(num.length)) {
    var check = num.substring(i[0],i[1])
    if (check == check.split('').reverse().join('') && check.length > 1) { count += 1 }  
  }
  return count
}

// generate indexes for all possible string slices
function* genIndexes(lim){
  for (var i=0; i <= lim; i++){
    for (var j=i; j <= lim; j++){
      yield [i,j]
    }
  }
}
