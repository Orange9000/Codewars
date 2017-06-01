def decode(s):
    return s.translate(str.maketrans('GgAaDdEeRrYyPpOoLlUuKkIi', 'AaGgEeDdYyRrOoPpUuLlIiKk'))

encode = decode
