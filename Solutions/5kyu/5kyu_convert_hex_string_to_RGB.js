function hexStringToRGB(s) {
  const colors = ['r','g','b']
  return s.slice(1)
          .match(/.{2}/g)
          .map((e,i)=>[colors[i], parseInt(e,16)])
          .reduce(function (obj,n){
                    obj[n[0]] = n[1]
                    return obj
                  },{})
}
