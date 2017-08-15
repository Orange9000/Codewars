def nameValue(myList):
    return [sum(map(lambda x: ord(x)-96 if x.isalpha() else 0, j))*i for i,j in enumerate(myList,1)]
