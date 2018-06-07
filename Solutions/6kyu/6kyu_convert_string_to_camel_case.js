String.prototype.cap=function(){
  return this[0].toUpperCase()+this.slice(1)
}

function toCamelCase(str){
  return str.length!=0 ? str.match(/[a-z]+/gi)
                            .map((e,i)=>i!=0 ? e.cap() : e)
                            .join``
                       :    
                       str
}
