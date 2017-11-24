const req={
'R': 3,
'E': 7,
'D': 2,
'O': 4,
'A': 1,
'N': 3,
'G': 3,
'Y': 1,
'L': 4,
'W': 1,
'B': 1,
'U': 1,
'I': 3,
'V': 1,
'T': 1}

function willThereEverBeARainbow(string){
  if (string.length<36) return 'Too short for a rainbow!'
  var c={};
  [...string].forEach(e=>c[e]==undefined ? c[e]=1 : c[e]++)
  return Object.keys(req).every(e=>req[e]*2<=c[e]) ? 'Double rainbow all the way!' :
         Object.keys(req).every(e=>req[e]<=c[e]) ? 'Look! A rainbow!' :
         'No rainbow to be found!'
}
