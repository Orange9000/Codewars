function duplicateCount(text){
  var original = text
  return text == "" ? 0 : Array.from(new Set(original.toLowerCase()))
                               .map(x=> text.match(new RegExp(x, 'gi')).length)
                               .filter(x=> x>1)
                               .length
}
