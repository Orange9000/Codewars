def alphabetized(s):
    return ''.join(s for s in sorted(s, key=lambda s: s.lower()) if s.isalpha())
