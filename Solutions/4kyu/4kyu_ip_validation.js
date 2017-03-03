octetCheck = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/

function isValidIP(str) {

  str = str.split('.')
  if (str.length !== 4){ return false };
  
  for (var i in str){
    if (!octetCheck.test(str[i])){return false};
  }  
  return true;  
}
