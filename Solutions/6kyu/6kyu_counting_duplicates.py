duplicate_count = lambda t: sum(1 for i,j in __import__('collections').Counter(t.lower()).most_common() if j>1)
