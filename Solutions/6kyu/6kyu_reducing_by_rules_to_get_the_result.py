def reduce_by_rules(lst, rules):
    new = list(lst)
    while True:
        for rule in rules:
            new = [rule(new.pop(0),new.pop(0))] + new
            if len(new) == 1: return new[0]
