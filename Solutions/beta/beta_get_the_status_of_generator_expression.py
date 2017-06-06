from inspect import getgeneratorlocals as ggl

def check_generator(gen):
    return {
            len(ggl(gen))==1: 'Created',
            len(ggl(gen))==2: 'Started',
            len(ggl(gen))==0: 'Finished'
            }[True]
