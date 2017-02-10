short=lambda l:{x:sum(list(map(list, l)), []).count(x) for x in reduce(lambda x,y: x|y, l)}
