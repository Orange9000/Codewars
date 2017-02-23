permute_a_palindrome = lambda s: bool( len(list(filter(lambda x: x%2!=0, [s.count(char) for char in set(s)]))) < 2 )
