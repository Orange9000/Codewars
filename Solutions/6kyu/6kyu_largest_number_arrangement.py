def largest_arrangement(numbers):
    #this should be at least two times faster
    #than permutations approach
    mlen = max(map(lambda x: len(str(x)), numbers))
    srtd1 = sorted(numbers)
    srtd2 = sorted(srtd1, key=lambda x: custom_sort(x, mlen), reverse=1)
    return int(''.join(map(str, srtd2)))
    

def custom_sort(n, mlen):
    to_str=str(n)
    return n if len(to_str)==mlen else int(to_str + to_str[0]*(mlen-len(to_str)))
