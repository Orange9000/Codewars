def string_to_int_list(s):
    return list(map(int, filter(bool, s.split(','))))
