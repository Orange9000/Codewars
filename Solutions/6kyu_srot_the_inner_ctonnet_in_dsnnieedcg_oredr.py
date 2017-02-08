sort_the_inner_content = lambda words: ' '.join(i[0]+''.join(sorted(i[1:-1], reverse=True))+i[-1] if len(i)>3 else i for i in words.split())
