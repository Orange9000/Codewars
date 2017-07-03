String.prototype.indexOf = function(c, start=0){
  const reg = new RegExp(c)
  const match = this.slice(start).match(reg)
  return match ? match.index+start : -1
};

String.prototype.lastIndexOf = function(c, lim=this.length){
  const reg = new RegExp(c)
  var match = -1
  
  for (var i=0; i<this.length; i++){
    const check = this.slice(i).match(reg)
    
    if (check) { check.index <= lim ? match = check.index : undefined }
    else { break }
  }
  return match == -1 ? match : match+i-1
};
