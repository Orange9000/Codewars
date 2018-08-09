String.prototype.r=function(){return [...this].reverse().join``}


function translateToAlienLanguage(s) {
  return s.split(' ')
          .map(e=>e.r().replace(/[aeiou]/ig, s=>s+s).toLowerCase())
          .join` `
}
