def solve(nums,div):
    return [n+(n%div) for n in nums]
