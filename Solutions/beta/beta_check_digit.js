function checkDigit(number, i1, i2, digit) {
  return (''+number).slice(Math.min(i1,i2),Math.max(i1,i2)+1).includes(''+digit)
};
