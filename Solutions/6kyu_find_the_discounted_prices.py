def find_discounted(prices):
    p,r = [int(x) for x in prices.split()], []
    while p:
        d = p[0]
        try:
            check = round((d/75.0)*100); p.remove(check); p.remove(d); r.append(str(d))
        except:
            p.remove(d) 
    return ' '.join(r)
