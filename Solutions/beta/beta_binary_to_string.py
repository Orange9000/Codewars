def binary_to_string(binary):
    return ''.join(chr(int(s,2)) for s in binary.split('0b') if s)
