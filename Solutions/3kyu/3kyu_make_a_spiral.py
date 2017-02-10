def spiralize(size):
    
    # create 2d array in a form of an enumerated dict (starting at 1)
    sp = dict(zip(list(range(1, size+1)), ([1]*size for x in range(1, size+1))))
    
    # reference values
    upper_shift = 2
    side_shift  = 0
    
    while True:
      try:
          # up horiz
          hup = sp[upper_shift]
          for i in range(side_shift, size-1):
            hup[i] = 0; sp[upper_shift] = hup

          # right vert
          for i in range(upper_shift, size):
            rvt = sp[i]; rvt[size-2] = 0; sp[i] = rvt
          
          # bottom horiz
          hbt = sp[size-1]
          for i in range(side_shift+1, size-1):
            hbt[i] = 0; sp[size-1] = hbt
          
          # left vert
          for i in range(upper_shift+2, size):
            vlt = sp[i]; vlt[side_shift+1] = 0; sp[i] = vlt
          
          upper_shift += 2
          side_shift  += 2
          size        -= 2
        
      except: return [sp[x] for x in sorted(sp.keys())]
