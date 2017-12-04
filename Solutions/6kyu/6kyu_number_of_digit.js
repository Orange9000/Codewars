function countDigit(number, digit, base, fromBase){
  return (parseInt(number, fromBase).toString(base).match(new RegExp(digit,'g'))||[]).length
};
