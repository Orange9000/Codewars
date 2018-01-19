def collatz(n,r=1):
    return r if n<2 else collatz({n%2==0:n/2, n%2!=0:(n*3)+1}[1], r+1) 
