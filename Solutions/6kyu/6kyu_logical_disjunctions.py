from functools import reduce

disjunction =lambda operands, xor: reduce(lambda x,y: (x ^ y) if xor else (x or y), operands)
