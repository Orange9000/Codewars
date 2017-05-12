function caseUnification(s) {            
  return s.split('')
          .map(c => /[A-Z]/.test(c) ? 1 : -1)
          .reduce((x,y)=>x+y) 
          > 0 
          ? 
          s.toUpperCase() : s.toLowerCase()              
}
