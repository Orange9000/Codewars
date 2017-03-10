function LCS(x, y) {

  var charCount = new Object();
  for (var i = 0; i < x.length; i++) { charCount[x[i]] = i }
  
  var result = ''
  var current_position = 0

  for (var char of y) {
    if (charCount[char] !== undefined && charCount[char] >= current_position){
      result += char
      current_position += 1
    }
  }
  
  return result
}
