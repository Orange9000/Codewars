function calculate(num1,num2){
  return toBase10(num1) + toBase10(num2)
}


function toBase10(s){
  return s.split('')
          .reverse()
          .map((e,i)=>e=='1'? Math.pow(2,i) : 0)
          .reduce((x,y)=>x+y)
}
