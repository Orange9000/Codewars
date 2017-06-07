function numberAndIPaddress(s){
  return s.includes('.') ? toInt(s) : toIp(s)
}

function toInt(s) {
  return String( parseInt(
                    s.split('.')
                     .map(e=> (+e).toString(2))
                     .map(e=> '0'.repeat(8-e.length)+e)
                     .join('')
                    ,2)
                )
}

function toIp(s, m=(+s).toString(2), p=('0').repeat(32-m.length)+m) {
  return p.match(/.{8}/g).map(e=>parseInt(e,2)).join('.')
}
