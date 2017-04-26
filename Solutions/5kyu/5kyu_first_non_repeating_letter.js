function firstNonRepeatingLetter(s) {
  for (var char of s) {
    var reg = new RegExp(char.toUpperCase() + '|' + char.toLowerCase(),'g')
    if (s.match(reg).length == 1) { return char }
  }  
  return ""  
}
