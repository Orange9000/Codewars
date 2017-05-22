function getLines(line){
  
  if (!String(line).match(/^\d+$/) || line == 0) { return -1 }
  
  var seq = ['1']
  for (var i=1; i < line; i++) {
    var num = seq.slice(-1)[0].match(/(\d)(\1)+|\d/g)
                              .map(e => e.length + e[0])
                              .join('')
    seq.push(num)
  }
  return seq.join(',')
}
