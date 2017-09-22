function addArrays() {
  if (Object.values(arguments).every(e=>e.length==0)){return []}
  return (''+
         Object.values(arguments).reduce((x,y)=>x+(parseInt(y.join(''))||0),0)
         )
         .match(/-?\d/g)
         .map(e=>Number(e))       
}
