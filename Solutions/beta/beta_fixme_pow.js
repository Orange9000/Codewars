const pow = (n,p) => p==0 ? 1 : Array(p).fill(n).reduce((x,y)=>x*y,1)
