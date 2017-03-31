function caffeine(coffee, number) {
  const vals = {'espresso':1,
                'double espresso':2,
                'flat white':2,
                'latte':1,
                'mocha':2,
                'decaf':0
                }
  const reply = ["You haven't even had coffee today!",
                 "The doctor won't be worried yet!",
                 "The doctor won't be worried yet!",
                 "The doctor won't be worried yet!",
                 "You can have 2 more shots then no more!",
                 "You can only have an espresso, latte or a decaf now"]
  
  var result = reply[vals[coffee]*number]
  return result == undefined ? "Only decaf for you now!" : result             
  
}
