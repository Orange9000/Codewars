const weights = [20,15,10,5,2.5,1.25]

function liftingCalc(w){
  if (w<20){return false}
  var res  = []
  var side = (w-20)/2
  var idx  = 0
  while(side>0){
    side>=weights[idx] ? (res.push(weights[idx]), side-=weights[idx]) : idx++
    if (idx>5){return false}
  }
  return res
}
