def minimum_number(numbers,add=0):
    return add if isprime(sum(numbers)+add) else minimum_number(numbers,add+1)

def isprime(n):
    return False if n<2 else True if n==2 else all(n%i!=0 for i in range(2,int(n**0.5)+1))
