function palindrome(num,s) { 
  if (typeof num != 'number' || num < 0 || num % 1 != 0
      || typeof s != 'number' || s < 0 || s % 1 != 0) { return "Not valid" }
  var result = []
  while (result.length < s) {
    if (isPali(num)) { result.push(num) }
    num += 1
  }  
  return result  
}


const isPali = num => num - parseInt(String(num)
                                     .split('')
                                     .reverse()
                                     .join('')) == 0 && String(num).length > 1 ? true : false
