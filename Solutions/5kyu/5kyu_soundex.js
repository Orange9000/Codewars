const tD = {
            'b':'1','f':'1','p':'1','f':'1', 'v':'1',
            'c':'2','g':'2','j':'2','k':'2','q':'2','s':'2','x':'2', 'z':'2',
            'd':'3','t':'3',
            'l':'4',
            'm':'5','n':'5',
            'r':'6'
            }


var soundex = function(names) {
  return names.split(' ').map(s => processString(s)).join(' ')  
}


function processString(s) {

  var fl = s[0]
  
  s = s.toLowerCase()
  
  // Remove all occurrences of h and w except first letter.
  s = s.split('').map((e,i) => 'hw'.includes(e) && i != 0 ? '' : e) 

  // Replace all consonants (include the first letter) with digits
  s = s.map(e => tD[e] != undefined ? tD[e] : e)

  // Replace all adjacent same digits with one digit
  s = s.join('').replace(/(\d)(\1)+/g, d => d[0])

  // Remove all occurrences of a, e, i, o, u, y except first letter.
  s = s.split('').map((e,i) => 'aeiouy'.includes(e) && i != 0 ? '' : e).join('')

  // If first symbol is a digit replace it with letter saved on step 1
  if ( /\d/.test(s[0]) ) { s = fl + s.slice(1, s.length) }

  // Append 3 zeros if result contains less than 3 digits. 
  // Remove all except first letter and 3 digits after it
  return s.match(/\d/g) == null || s.match(/\d/g).length < 3 
                                 ? 
                                 (s + '000').slice(0, 4).toUpperCase() 
                                 : 
                                 s.slice(0, 4).toUpperCase()
 }
