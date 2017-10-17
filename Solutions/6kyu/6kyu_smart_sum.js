function smartSum(){
  return JSON.stringify(Object.keys(arguments).map(e=>arguments[e]))
             .match(/\d+/g)
             .reduce((acc,val)=>acc+ +val, 0)
}
