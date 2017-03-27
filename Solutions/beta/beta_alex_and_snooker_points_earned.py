import re

def frame(balls):
    if "W" in balls: return "Foul"
    score = sum(int(blz[i])*int(j if j else 1) for i,j \
                in re.findall("(R|Y|G|Bn|Be|P|Bk)(\d+)?", balls))
    return "invalid data" if score > 147 else score
