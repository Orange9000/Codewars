function nico(key, message)  {
  const mlen = message.length
  const klen = key.length
  const part = Math.ceil(message.length/key.length)

  var d = {}
  
  var mask = key.split('')
                .sort()
                .map((e,i)=>[e,i+1])
                .sort((a,b)=>key.indexOf(a[0])-key.indexOf(b[0]))
                .map(e=>e[1])

  
  for (var i=0; i<klen; i++){
    var temp = ''
    for (var j=i; j<mlen; j+=klen){
      temp += message[j]
    }
    temp.length < part ? temp += ' '.repeat(part-temp.length) : undefined
    d[mask.shift()] = temp.split('')
  }
  
  var result = ''
  
  while(Object.keys(d).every(e=>d[e].length!=0)){
    Object.keys(d).forEach(e=> result += d[e].shift())
  }
  
  return result
}
