function encode(pt){
  return pt.split(' ')
           .map(e=> e.split('')
                     .reverse()
                     .slice(1,e.length)
                     .join('')
                     +
                     e.slice(-1)[0]
               )
           .join(' ')    
}
