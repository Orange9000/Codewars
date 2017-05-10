function isDivisibleBy6(s) {
  var result = []
  if (!isEven(s)) { return result }
  
  for (var j=0; j < 10; j++) {
    var check = s.replace(/\*/, j)
    if ( checkNum(check) ) { result.push(check) }
  }
  
  return result
}


const isEven = (s, nums = ['0','2','4','6','8','*']) => nums.some(num => num == String(s).slice(-1)[0])


function checkNum(num) {
  return isEven(num) && String(num)
                        .split('')
                        .map(s => parseInt(s))
                        .reduce((x,y)=> x+y) % 3 == 0
}
