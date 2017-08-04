const alpha = 'abcdefghijklmnopqrstuvwxyz'

function caesarEncode(phrase, shift) {
    return phrase.split(' ').map((e,i)=> encode(e,i+shift)).join(' ')
}

function encode(word, shift){
  return [...word].map(char=>alpha[(alpha.indexOf(char)+shift)%26]).join('')
}
