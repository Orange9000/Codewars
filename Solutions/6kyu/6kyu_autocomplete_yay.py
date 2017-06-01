import re

def autocomplete(input_, dictionary):
    return [x for x in dictionary 
              if x.lower().startswith(
                                      re.sub('[^a-zA-Z]', '', input_.lower())
                                      )
                                      ][:5]
