def expanded_form(num):
    return ' + '.join(
                      [
                       str(int(i)*j) for i,j in
                           zip(
                               str(num)[::-1], 
                               [1,10]+[pow(10,p) for p in range(2,50)]
                               )
                      if i!='0'][::-1]
                      )
