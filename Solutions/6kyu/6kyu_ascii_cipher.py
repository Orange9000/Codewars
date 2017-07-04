def ascii_cipher(message, key):
    pfactor = max(
                i for i in range(2, abs(key)+1)
                    if is_prime(i) and key%i==0
                 )*(-1 if key<0 else 1)
    return ''.join(chr((ord(c)+pfactor)%128) for c in message) 
    
    
def is_prime(n):
    if n < 2: return False
    return all( n%i!=0 for i in range(2, round(pow(n,0.5))+1) ) or n==2
