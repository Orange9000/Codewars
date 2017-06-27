function calculate(str) {
  return str.replace(/\s/g,'')
            .split('+')
            .map(e=> Number(e))
            .reduce((x,y)=>x+y,0)
}
