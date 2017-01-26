ROMAN = list(zip(('I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'),
                 (1,4,5,9,10,40,50,90,100,400,500,900,1000)))

def solution(data):
    result = ''
    for i in ROMAN[::-1]:
        if i[1] <= data:
            while data - i[1] >= 0:
                data = data - i[1]
                result += i[0]
    return result
