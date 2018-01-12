const al='abcdefghijklmnopqrstuvwxyz'


function encode(text, key) {
  const alpha=makealpha(new Set(key))
  return text.replace(/[a-z]+/gi, s=> make(alpha,s))
}


function decode(text, key) {
  const alpha=makealpha(new Set(key))
  return text.replace(/[a-z]+/gi, s=> make(alpha,s,false))
}


function make(alpha, word, encode=true){
  const cmap=[...word].map(e=>/[A-Z]/.test(e) ? 1 : 0)
  word=[...word.toLowerCase()]
       .map((e,i)=>
          encode ?
            alpha[alpha.indexOf(e)+i+1]
            :
            alpha[alpha.lastIndexOf(e)-(i+1)]
           )
  return word.map((e,i)=>cmap[i]==1 ? e.toUpperCase() : e).join('')
}


function makealpha (key) {
  key=[...key].join('')
  return (key+[...al].filter(e=>!key.includes(e)).join('')).repeat(3)
}
