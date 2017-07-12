from itertools import takewhile

def find_similar_dogs(breed):
    compare = dogs[breed]
    scores = sorted((
              [
               dog,
               sum(1 if q in compare else 0 for q in dogs[dog])
              ]
               for dog in dogs if dog != breed
              ), key = lambda x: x[1], reverse=True)
    max_score = scores[0][1]
    return {s[0] for s in takewhile(lambda x: x[1]==max_score, scores)}
