DNA_strand = lambda dna: dna.translate(__import__('string').maketrans('ATCG','TAGC'))
