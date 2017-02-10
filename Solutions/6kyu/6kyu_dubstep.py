song_decoder = lambda song: __import__('re').sub('(WUB)+', ' ', song).strip(' ')
