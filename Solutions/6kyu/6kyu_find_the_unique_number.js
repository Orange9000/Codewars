function findUniq(arr) {

  const sample = arr.slice(0, 2)
  const sSize  = new Set(sample).size
  
  for (var j of arr.slice(2, arr.length)){
    if (sSize == 2 && sample.includes(j)){
      return sample.filter(e=> e!=j)[0]
    }
    if (!sample.includes(j)) { return j }
  }
}
