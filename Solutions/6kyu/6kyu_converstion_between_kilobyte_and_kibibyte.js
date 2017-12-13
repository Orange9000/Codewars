const d={
  'KiB':[(n)=>n*Math.pow(1.024,1),'kB'],
  'MiB':[(n)=>n*Math.pow(1.024,2),'MB'],
  'GiB':[(n)=>n*Math.pow(1.024,3),'GB'],
  'TiB':[(n)=>n*Math.pow(1.024,4),'TB'],
  'kB' :[(n)=>n/Math.pow(1.024,1),'KiB'],
  'MB' :[(n)=>n/Math.pow(1.024,2),'MiB'],
  'GB' :[(n)=>n/Math.pow(1.024,3),'GiB'],
  'TB' :[(n)=>n/Math.pow(1.024,4),'TiB']
}


function memorysizeConversion (s){
  var [n,m] = s.split(' ')
  return `${Math.round((d[m][0](+n))*1000)/1000} ${d[m][1]}`
}
