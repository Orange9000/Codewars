const RG = new RegExp(/^(\d+)\s([a-zA-Z]+)[^\d]+(\d+\.\d+)[^\d]*$/)

function balance(book) {
  var t = parseFloat(book.match(/\d+(\.\d+)?/)[0])
  var [r,te,c]=[[`Original Balance: ${t.toFixed(2)}`],0,0]
  
  for (var j of book.split('\n').slice(1)){
    var s=j.match(RG)
    if (s){
      r.push(`${s[1]} ${s[2]} ${(+s[3]).toFixed(2)} Balance ${(t-=parseFloat(s[3])).toFixed(2)}`)
      te+=parseFloat(s[3])
      c++
    }
  }
  r.push(`Total expense  ${te.toFixed(2)}`)
  r.push(`Average expense  ${(te/c).toFixed(2)}`)
  
  return r.join`\r\n`
}
