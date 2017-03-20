from string import ascii_uppercase as AU

def new_numeral_system(number):
    idx = AU.index(number)
    return ["{} + {}".format(AU[i], AU[idx-i]) for i in range((idx//2)+1)]  
