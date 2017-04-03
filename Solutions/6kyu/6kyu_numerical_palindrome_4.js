function palindrome(num) { 
  if (typeof num != 'number' || num % 1 != 0 || num < 0) { return "Not valid" }
  if (String(num).length == 1) { return 11 }
  var mm = num
  var mx = num
  while (String(mm) != String(mm).split('').reverse().join('')){
    mm -= 1
  }
  while (String(mx) != String(mx).split('').reverse().join('')){
    mx += 1
  }
  return [mx,mm].sort((x,y)=> Math.abs(num-x) - Math.abs(num-y))[0]
}
