from random import randint
import re

ABC = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345678901234567890123456789"

def password_gen():
    password = ''.join(ABC[randint(0,81)] for i in range(0, randint(6, 20)))
    return password if re.fullmatch('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,20}', password) else password_gen()
