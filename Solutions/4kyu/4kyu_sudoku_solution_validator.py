from functools import reduce

compare = [1,2,3,4,5,6,7,8,9]

def validSolution(board):
    
    for i in board:
        if sorted(i) == compare: continue
        else: return False
            
    for i in zip(*board):
        if sorted(i) == compare: continue
        else: return False
    
    for j in range(0,9,3):
    	if checker([board[j][:3],board[j+1][:3],board[j+2][:3]]) and \
    	   checker([board[j][3:6],board[j+1][3:6],board[j+2][3:6]]) and \
    	   checker([board[j][6:],board[j+1][6:],board[j+2][6:]]):
    		continue
    	else:
    		return False
    return True

def checker(three_by_three):
    if sorted(list(reduce(lambda x,y: x+y, three_by_three))) == compare:
        return True
    return False
