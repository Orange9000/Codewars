from operator import mul
from functools import reduce

def fizzbuzz_plusplus(nums, words):
    return [''.join(words[nums.index(d)] for d in nums if i%d==0) or i
                for i in range(1,reduce(mul,nums)+1)]
