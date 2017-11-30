from collections import Counter

def string_evaluation(s,conditions):
    c=Counter(s)
    return [eval(
             str(c.get(v[0], v[0]))+\
             v[1:-1]+\
             str(c.get(v[-1], v[-1]))
                ) for v in conditions]
