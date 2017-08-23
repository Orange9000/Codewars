def thue_morse(n):
    seq = '0'
    while len(seq)<n:
        seq += seq.translate(str.maketrans('01','10'))
    return seq[:n]
