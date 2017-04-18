const faultyOdometer = n => String(n).split('').reverse().map( (e,i)=> "012356789".indexOf(e) * Math.pow(9,i) ).reduce( (x,y)=> x+y )
