var palindromeChainLength = function(n, s=0) {
  return n == (n).reverse() ? s : palindromeChainLength(n + (n).reverse(), s+1)
};


Number.prototype.reverse = function() { 
  return parseInt( 
                  String(this).split('')
                              .reverse()
                              .join('')
                  )            
}  
