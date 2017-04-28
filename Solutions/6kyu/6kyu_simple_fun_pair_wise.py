from itertools import combinations

def pairwise(arr, n):

    # dict to store indexes for each number
    # example: 
    # arr  = [1,1,1,1,2,2]
    # dict = {1:[0,1,2,3], 2:[4,5]}
    # used up indexes are deleted
    idx_dict = find_indexes(arr)
    result = 0
    
    for i,j in combinations(arr,2):
        if (i+j)==n:
            try:
                result += (idx_dict[i].pop(0) + idx_dict[j].pop(0))
            except IndexError:
                continue
    return result
                          
def find_indexes(arr):
    idx_dict = {}
    for i,j in enumerate(arr):
        try:
            idx_dict[j] += [i]
        except KeyError:
            idx_dict[j] = [i]
    return idx_dict
