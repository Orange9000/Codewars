function validBraces(braces){
  for (var i = 1; i < braces.length * 3; i++){
    braces = braces.replace('{}','')
    braces = braces.replace('()','')
    braces = braces.replace('[]','')
  }
  if (braces.length > 0){
    return false;
  }
  else{
    return true;
  }  
};
