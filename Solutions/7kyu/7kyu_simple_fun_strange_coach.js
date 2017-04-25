function strangeCoach(players) {
  var dict = new Object();
  for (var j of players) {
    key = j[0]
    dict[key] == undefined ? dict[key] = 1 : dict[key] = dict[key] + 1
  }
  return Object.keys(dict).filter(key => dict[key] >= 5)
               .sort((x,y) => x > y).join('') || 'forfeit'  
  
}
