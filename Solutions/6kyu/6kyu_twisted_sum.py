def compute_sum(n):
    return sum(sum(map(int, str(num))) for num in range(1, n+1))
