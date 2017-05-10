function copy(a, st, sp, pl){
  var p1 = a.slice(0, pl)
  var p2 = a.slice(st,sp)
  return [p1, 
          p2,
          a.slice(p1.length + p2.length, a.length)]
          .reduce((x,y)=>x.concat(y))
};
