function solve(s){
  return Math.max(...(s.match(/[aeiou]+/g)||['']).map(e=>e.length))
}
