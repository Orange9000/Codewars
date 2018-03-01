const matrixfy = str => {
  if (str.length<1) return "name must be at least one letter"
  var l=str.length
  while (Math.pow(l,0.5)!=parseInt(Math.pow(l,0.5))){ l++}
  return (str+'.'.repeat(l-str.length)).match(new RegExp(`.{${Math.pow(l,0.5)}}`, 'g')).map(e=>e.split(''))
}
