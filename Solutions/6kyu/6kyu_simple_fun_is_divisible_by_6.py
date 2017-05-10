def is_divisible_by_6(s):
    if not is_even(s): return []
    return list(
             filter(checker, 
               (s.replace('*', str(n)).lstrip('0') for n in range(10))
                    )
                     )    
        

checker = lambda n: is_even(n) and sum(map(int, str(n))) % 3 == 0 if n else False    
        
is_even = lambda s: any(s[-1].endswith(i) for i in '02468*')
