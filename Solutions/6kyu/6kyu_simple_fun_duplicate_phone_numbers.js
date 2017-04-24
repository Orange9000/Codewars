const d = {'A':'2','B':'2','C':'2',
          'D':'3','E':'3','F':'3',
          'G':'4','H':'4','I':'4',
          'J':'5','K':'5','L':'5',
          'M':'6','N':'6','O':'6',
          'P':'7','R':'7','S':'7',
          'T':'8','U':'8','V':'8',
          'W':'9','X':'9','Y':'9'}


function findDuplicatePhoneNumbers(phoneNumbers){
  var counter = new Object();
  var result = []
  for (var j of phoneNumbers) {
    key = toDigitForm(j)
    counter[key] == undefined ? counter[key] = 1 : counter[key] = counter[key]+1
  }
  return Object.keys(counter)
               .filter(key => counter[key] > 1)
               .map(s => s.slice(0,3) + '-' + s.slice(3,s.length) + ':' + counter[s])
  
}

const toDigitForm = (word) => word.split('')
                              .filter(s => s.match(/[a-z0-9]/i))
                              .map(s => s.match(/[a-z]/i) != null ? d[s.toUpperCase()] : s)
                              .join('')
