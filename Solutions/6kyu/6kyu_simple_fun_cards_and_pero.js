function cardsAndPero(s) {

  var seen  = new Set();
  var cards = {'P':13,'K':13,'H':13,'T':13}

  for (var i=0; i < s.length; i += 3) {
    var card = s.slice(i, i+3)
    if (seen.has(card)) { return [-1, -1, -1, -1] }
    seen.add(card)
    cards[card[0]] -= 1
  }  
  return Object.keys(cards).map(k => cards[k])
}
