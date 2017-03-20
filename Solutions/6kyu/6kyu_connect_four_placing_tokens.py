def connect_four_place(columns):
    source = [['-', '-', '-', '-', '-', '-', '-'],
              ['-', '-', '-', '-', '-', '-', '-'],
              ['-', '-', '-', '-', '-', '-', '-'],
              ['-', '-', '-', '-', '-', '-', '-'],
              ['-', '-', '-', '-', '-', '-', '-'],
              ['-', '-', '-', '-', '-', '-', '-']]
    
    token = ['Y','R']
    
    for pos in columns:
        for num, subarr in enumerate(source):
            if source[num][pos] == '-': 
                source[num][pos] = token[0]
                token.reverse()
                break
                
    return source[::-1]
