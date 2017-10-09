def solve(arr):
    return [calc(word) for word in arr]  

calc = lambda word: sum(
                      1 for i,w in enumerate(word.lower(),1)
                          if (ord(w)-96)==i
                          )
