var solution = (str) => {
  return str.match(/[^\=&\?]+\=[^\=&\?]+/ig)
            .map(e=>e.split('='))
            .reduce(function(obj,n){
                     obj[n[0]]=n[1]
                     return obj
                    },{})
}
