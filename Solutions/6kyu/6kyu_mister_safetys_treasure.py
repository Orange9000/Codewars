def unlock(m):
    return m.lower().translate(
                       str.maketrans(
                          'abcdefghijklmnopqrstuvwxyz',
                          '22233344455566677778889999'
                                    )
                              )
