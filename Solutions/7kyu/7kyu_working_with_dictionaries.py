COMPARE = {
           "higher than":           lambda x,y: x>y,
           "lower than" :           lambda x,y: x<y,
           "equals to"  :           lambda x,y: x==y,
           "higher and equals to" : lambda x,y: x>=y,
           "lower and equals to" :  lambda x,y: x<=y,
           }

def inf_database(r_, str_, val):
    try:
        result = [num for num in range(r_[0], r_[1]+1) if COMPARE[str_](A001055[num], val)]
        return len(result), result
    except:
        return "wrong constraint"
