function decode  (code, n) {
    return code.map( (e,i)=> e - parseInt( [...(n+'')][i % (n+'').length] ) )
               .map( e=> String.fromCharCode(e+96) )
               .join('')
}
