function rgb(r, g, b){
  return [r,g,b].map(e=>('0'+valid(e).toString(16)).slice(-2).toUpperCase()).join('')   
}

function valid(n){
  return n>255 ? 255 : n<0 ? 0 : n
}
