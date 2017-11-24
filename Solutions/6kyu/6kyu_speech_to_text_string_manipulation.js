var bot = {
  message: function(msg) {
    return msg.includes('Add') ? msg.match(/\d+/g).reduce((x,y)=>+x+ +y) :
           msg.includes('Subtract') ? msg.match(/\d+/g).reduceRight((x,y)=>+x- +y) :
           dt(msg)
  }
};

function dt(n){
  const t=+n.match(/\d+/g).map((e,i)=>i==1 ? ('0'+e).slice(-2) : e).join('')
  const a=n.slice(0,-1).slice(-2)
  return (t>=600 && a=='am') || (t<=600 && a=='pm') ? 'sunny' : 'raining'
}
