class VendingMachine():

    def __init__(self, items, money):
        self.items = dict(enumerate(items))
        self.money = money

    def vend(self, selection, item_money):
        try:
            n,v = [(n,self.items[n]) for n in self.items 
                      if (self.items[n]['code']).lower() == selection.lower()][0]       
        except:
            return "Invalid selection! : Money in vending machine = {:.2f}".format(self.money)
            
        if item_money < v['price']:
        
            return "Not enough money!"
            
        if v['quantity'] <= 0:
        
            return "{}: Out of stock!".format(v['name'])
            
        if item_money > v['price']:
        
            change        = item_money - v['price']
            v['quantity'] = v['quantity'] - 1
            self.money   += (-change + item_money)
            self.items[n] = v
            
            return "Vending {} with {:.2f} change.".format(v['name'], change)
            
        else:
        
            v['quantity'] = v['quantity'] - 1
            self.money   += item_money
            self.items[n] = v
            
            return "Vending {}".format(v['name'])
