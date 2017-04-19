function wave(s){
  var result = []
  for (var i=0; i < s.length; i++) {
    if (/[a-z]/.test(s[i])) {
      result.push(s.slice(0,i) + s[i].toUpperCase() + s.slice(i+1, s.length))
    }
  }  
  return result  
}
