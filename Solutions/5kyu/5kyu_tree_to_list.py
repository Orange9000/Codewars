class Node:
    def __init__(self, data, child_nodes=None):
        self.data = data
        self.child_nodes = child_nodes

def tree_to_list(tr):
    call = to_list(tr, 0, [])
    return call
    
def to_list(tr, depth, res):
    res.append([tr.data, depth])
    if tr.child_nodes:
        for i in tr.child_nodes:
            to_list(i, depth+1, res)
    return [i[0] for i in sorted(res, key = lambda x: x[1])]
