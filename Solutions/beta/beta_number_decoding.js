const alpha = '_abcdefghijklmnopqrstuvwxyz'

function decode(number){
  return number.replace(/98$/, '')
               .split('98')
               .map((e,i)=>
                    i%2 != 0 ?
                    parseInt(e, 2)
                    :
                    e.match(/.{3}/g).map(c=>alpha[+c%100]).join('')
                    )
               .join(', ')    
}
