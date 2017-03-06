romans = [[1000,'M'],
          [900,'CM'],
          [500, 'D'],
          [400,'CD'],
          [100, 'C'],
          [90, 'XC'],
          [50,  'L'],
          [40, 'XL'],
          [10,  'X'],
          [9,  'IX'],
          [5,   'V'],
          [4,  'IV'],
          [1,   'I']] 
          

function solution(number){
  res = ''
  for (var i in romans){
    if (number >= romans[i][0]){
      times  = Math.floor(number/romans[i][0])
      number = number - (times * romans[i][0])
      res    += romans[i][1].repeat(times)
    }
  }  
  return res  
}
