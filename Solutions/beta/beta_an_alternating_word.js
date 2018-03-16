function alternates(word){
  return word.length>1 && !/[aeiou]{2,}/gi.test(word) && !/[^aeiou]{2,}/gi.test(word)
}
