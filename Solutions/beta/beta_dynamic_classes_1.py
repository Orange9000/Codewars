def class_name_changer(cls, new_name):
    if not new_name.isalnum() or not new_name[0].isupper(): 
        raise Exception('Invalid name!')
    cls.__name__ = new_name
