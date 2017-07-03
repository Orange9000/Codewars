function countArara(n) {
  return n%2==0 
         ?
         Array(n/2).fill('adak').join(' ')
         :
         (Array(Math.floor(n/2)).fill('adak')||[]).concat('anane').join(' ')
}
