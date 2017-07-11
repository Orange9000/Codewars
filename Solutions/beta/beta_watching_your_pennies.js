function manageMoney(cash,expenses,rate,months=12) {
  return cash>0&&months>0
         ?
         manageMoney((cash)*(1+rate/100)-expenses, expenses, rate, months-1)
         :
         cash<=0 ? `You ran out of money after ${11-months} months`
         :
         `You still have $${Math.round(cash*100)/100}`
}
