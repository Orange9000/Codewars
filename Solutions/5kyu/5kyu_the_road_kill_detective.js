var roadKill = function(photo) {
  if (photo.match(/[^a-z=]/g) || !photo) { return '??' }
  
  var found = photo.replace(/[^a-z]/g, '')
  
  for (var j of ANIMALS) {
    if ( compare(j, found) ) { return j }
  }
  return "??"
}

function compare(w1, w2) {
  for (var j of w1) {
    try { if ( 
             w2.match(new RegExp(j, 'g')).length <
             w1.match(new RegExp(j, 'g')).length
             )
             { return false }
    }
    catch (TypeError) { return false }
  }  
  w1 = process(w1); w2 = process(w2)
  return w1==w2 || w1.split('').reverse().join('')==w2
}  

function process(word) {
  return word.replace(/(.)(\1)+/g, s=> s[0])
}
