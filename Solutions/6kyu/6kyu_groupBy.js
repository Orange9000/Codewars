const equals = (v,w) => v===w

Array.prototype.groupBy = function groupBy(key=null) {
  const condition = (key||equals)
  var res =[]
  var temp=[this[0]]
  
  if (this.length==0) return []
  
  for (var e of this.slice(1)){
    if (temp.length==0 || condition(e, temp.slice(-1)[0])) temp.push(e)
    else {
      res.push(temp)
      temp=[]
      temp.push(e)
    }
  }
  if (temp.length!=0) res.push(temp)
  return res
};

Object.defineProperty(Array.prototype,"groupBy",{enumerable:false});
