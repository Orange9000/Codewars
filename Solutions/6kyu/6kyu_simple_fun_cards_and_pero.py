SAME = [-1, -1, -1, -1]

def cards_and_pero(s):
    suits = {'P':13,'K':13,'H':13,'T':13}
    seen  = set()
    for card in (s[i:i+3] for i in range(0, len(s), 3)):
        if card not in seen:
            seen.add(card)
            suits[card[0]] -= 1
        else:
            return SAME
    return [suits[char] for char in 'PKHT']
