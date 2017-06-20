function wordsToObject(input) {
  return '['+ input.match(/[^\s]+\s[^\s]+/g)
                   .map( e=> e.split(' ') )
                   .map( e=> `{name : '${e[0]}', id : '${e[1]}'}` )
                   .join(', ') + ']'
}
