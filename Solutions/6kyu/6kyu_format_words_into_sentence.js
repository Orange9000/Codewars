function formatWords(words){
  return Array.isArray(words) && words.lentgh !=0
         ?
         words.filter(e=>e).join(', ').replace(/(\w+)(,)(\s\w+)$/, "$1 and$3")
         :
         ''
}
