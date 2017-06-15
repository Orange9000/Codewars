function findUniq(arr) {
  const sample = arr.slice(0,2)
                    .map(e=> standardize(e))
  const sSize  = new Set(sample).size
  
  for (var j of arr.slice(2,arr.length)){
    const check = standardize(j)
    
    if (sSize == 2 && sample.includes(check)) {
      return sample.filter(e => standardize(e)!=check)[0]
    }
    if (!sample.includes(check)) { 
      return j
    }
  }
}

const standardize = (s) => Array.from( 
                                      new Set( 
                                              s.toLowerCase()
                                               .split('')
                                               .sort((a,b)=>a>b)
                                              )
                                      ).join('')
