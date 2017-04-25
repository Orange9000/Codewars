function splitExp(n) {
  var res = []
  n = n.split('.')
  n.length == 2 ? res = format(n[0]).concat(format(n[1], false)) : res = format(n[0])
  return res
}


function format(n, intgr = true) {
  if (intgr) {
    return n.split('')
            .reverse()
            .map((e,i)=> e == '0' ? '' : e + ('0').repeat(i))
            .reverse()
            .filter(e => e != '')
  }
  else {
    return n.split('')
            .map((e,i)=> e == '0' ? '' : '.' + ('0').repeat(i) + e)
            .filter(e => e != '')
  }
}
