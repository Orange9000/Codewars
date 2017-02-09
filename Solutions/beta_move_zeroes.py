def move_zeroes(*args):
    return sum([[x]*args.count(x) for x in range(min(args), max(args)+1) if x!=0], []) + \
               [0]*args.count(0) if args else []
