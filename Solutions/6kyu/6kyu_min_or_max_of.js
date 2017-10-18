function max(xx){
  var ma=null
  for (var e of xx) !ma ? ma=e : e>ma ? ma=e : undefined
  return ma
}

function min(xx){
  var mi=null
  for (var e of xx) !mi ? mi=e : e<mi ? mi=e : undefined
  return mi
}
