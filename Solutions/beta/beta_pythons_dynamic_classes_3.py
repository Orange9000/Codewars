def create_class(class_name, secrets = None):
    
    if not class_name: return None
    
    class NewClass(object):
        pass
            
    NewClass.__name__ = class_name
    
    if not secrets: return NewClass
    
    for i in secrets:
        if 'function' in str(type(secrets[i])):
            setattr(NewClass, i, classmethod(secrets[i]))
        else:
            setattr(NewClass, i, secrets[i])

    return NewClass
