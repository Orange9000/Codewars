var encryptThis = function(text) {
  return text.replace(/\w+/g, s=>trans(s));
}

function trans(w){
  var res=w.slice(0)[0].charCodeAt()
  
  if (w.length<=4) res += [...w.slice(1)].reverse().join``
  else res += w.slice(1).replace(/(^.)(.+)(.$)/, `$3$2$1`)
  
  return res;
}
