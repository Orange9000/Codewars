var compress = function (str) {

  var reg = new RegExp(Array.from(new Set(str))
                                      .map(s => /[a-z0-9]/.test(s) ? s + '+' : '\\' + s + '+')  
                                      .join('|'), 'g')
                                      
  var compressed = str.match(reg).map(s => [s.length, s[0]])
  compressed = JSON.stringify(compressed)
  
  return str.length > compressed.length ? compressed : str
}

var decompress = function (c) {
  return c.includes('[') ? eval(c)
                           .map(arr => arr[1].repeat(arr[0]))
                           .join('') : c
}
