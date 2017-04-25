from collections import Counter

def strange_coach(players):
    return ''.join(
                  sorted(i for i,j in
                          Counter(map(lambda x: x[0], players)).most_common()
                              if j >= 5)) or 'forfeit'
