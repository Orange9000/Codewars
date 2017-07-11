function shoppingListCost(arr) {
  return Math.round(
          arr.map(e=>groceries[e[0]]['price']
                  *
                  (100-groceries[e[0]]['discount'])/100
                  *
                  Math.ceil(e[1]/{false:1,true:2}[groceries[e[0]]['bogof']])
                  ).reduce((x,y)=>x+y, 0) * 100)/100
                 
}
