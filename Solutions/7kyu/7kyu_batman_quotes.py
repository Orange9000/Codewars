class BatmanQuotes(object):

    @staticmethod
    def get_quote(quotes, hero):
        index = int(sorted(hero)[0])
        return {'B':'Batman: ','R':'Robin: ','J':'Joker: '}[hero[0]] + quotes[index]
