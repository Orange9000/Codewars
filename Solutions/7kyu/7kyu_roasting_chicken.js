function cookingTime(weight){
  if (weight<=0){ return "There is no chicken!" }

  var mins=Math.ceil((((weight*1e3)/22.5))/5)*5+20
  
  var h=Math.floor(mins/60)
  var m=Math.floor(mins%60)
  
  var p1=null; var p2=null
  h==0 ? p1=`` : h<2 ? p1=`${h} hr ` : p1=`${h} hrs `
  m==0 ? p2=`` : p2=`${m} mins`
  
  return (p1+p2).replace(/\s$/, '')
  
}
