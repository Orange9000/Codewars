String.prototype.capitalize=function(){
  return this[0].toUpperCase()+this.slice(1).toLowerCase()
}

function cleanItUp(s) {
  var rs=s.replace(/[^a-z]+/gi, '')
  return rs.length<5 ? '' : rs.match(/.{5}/g).map(e=>e.capitalize()).join` `
}
