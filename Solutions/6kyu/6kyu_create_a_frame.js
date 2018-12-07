const frame = (text, char) => {
  const maxlen = Math.max(...text.map(e=>e.length))
  const ns = char.repeat((4+maxlen))
  var res = [ns]
  
  for (var j of text) {
    const filler=ns.length-3-j.length
    res.push(`${char} ${j}${(' ').repeat(filler)}${char}`)
  }
  
  res.push(ns)
  
  return res.join`\n`
};
