function pieChart(obj)
{
  var total = obj.match(/\d+(,|})/g).reduce((x,y) => parseInt(x) + parseInt(y), 0) 
  return obj.replace(/\d+(,|})/g, s => calc(total, s))
}

const calc = (t, s) => s.replace(/\d+/, Math.round(360/(t/Number(parseInt(s)))*100)/100)
