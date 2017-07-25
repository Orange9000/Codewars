const jap = {
'cho':Math.pow(10,12),
'oku':Math.pow(10,8),
'man':Math.pow(10,4)
}

function japanese(num) {
  var res = []
  for (var key of Object.keys(jap)){
    num >= jap[key]
        ?
        (
        res.push(`${Math.floor(num/jap[key])} ${key}`)
        ,
        num -= Math.floor(num/jap[key])*jap[key]
        )
        :
        undefined
  }
  return res.filter(e=>e).join(', ')
    
}
