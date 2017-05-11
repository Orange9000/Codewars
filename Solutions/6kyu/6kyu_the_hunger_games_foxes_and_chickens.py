import re

def hungry_foxes(farm):
    
    # caged chicken
    farm = re.sub('\[([CF\.]+)\]', 
                  lambda w: w.group().replace('C','.') if 'F' in w.group() else w.group(),
                     farm)
                     
    # outside cage chicken                 
    if 'F' in re.sub('\[[CF\.]+\]','',farm):
      farm = re.sub('(^[CF\.]+\[)|(\][CF\.]+\[)|(\][CF\.]+$)', 
                  lambda w: w.group().replace('C','.'),
                     farm)
    # if no cages
    check = set(farm)
    return farm.replace('C','.')  if '[' not in check and 'F' in check else farm
