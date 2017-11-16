function certainSum(a, b){
  return ({[true]:'-',[false]:''}[a<0||b<0]+(a+b).toString(2)).length > 53 ? false : a+b
}
