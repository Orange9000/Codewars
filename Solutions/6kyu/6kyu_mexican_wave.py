def wave(s):
    return [s for s in (''.join(char.upper() if num == i else char for num,char in enumerate(s))
                            for i in range(len(s))
                                ) 
                                if s != s.lower()]
