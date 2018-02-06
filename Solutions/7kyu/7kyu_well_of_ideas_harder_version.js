function well(x){
  var c=0;
  x.reduce((x,y)=>x.concat(y),[])
   .forEach(e=>typeof e=='string' && e.toLowerCase()=='good'?c++:undefined)
  return c==0 ? 'Fail!' : c<3 ? 'Publish!' : 'I smell a series!'
}
