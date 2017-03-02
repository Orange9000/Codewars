function whichOper(num1, num2, op){
  ops = {'a': function add (a,b) {return a+b},
         's': function sub (a,b) {return a-b},
         'm': function mul (a,b) {return a*b},
         'd': function div (a,b) {return a/b}
         }
  return ops[op[0]](num1,num2)      
}
