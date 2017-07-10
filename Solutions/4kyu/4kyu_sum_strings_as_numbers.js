function sumStrings(a,b) {

  a = make(a); b = make(b)
  var res = []; var r = 0
  
  for (var i=0; i<Math.max(a.length,b.length); i++){
    const x = Number(a[i] || 0)
    const y = Number(b[i] || 0)
    x+y+r < 10 ? (res.push(x+y+r), r=0) : (res.push((x+y+r)-10), r=1)
  }
  
  r == 1 ? res.push(r) : undefined
  return res.reverse().map(e=>String(e)).join('')
}

const make = (num) => num.replace(/^0+/, '').split('').reverse()
