from numpy import average

def color_2_grey(colors):
    return [
            [
             [round(average(subsubarr))]*3 for subsubarr in subarr
              ] 
              for subarr in colors]
