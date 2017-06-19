function high(str){
  return str.split(' ')
            .sort((a,b)=>calc(a)<calc(b))[0]
}

function calc(word) {
  return [...word].map(e=>e.charCodeAt(0)-96)
                  .reduce((x,y)=>x+y, 0)
}
