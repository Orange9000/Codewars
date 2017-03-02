def whichOper(a, b, oper):
    return {'a':lambda x,y: x+y,
            's':lambda x,y: x-y,
            'm':lambda x,y: x*y,
            'd':lambda x,y: x/y}[oper[0]](a,b)
