function dirReduc(arr){
  arr = arr.join('1')
  while (/NORTH1+SOUTH|EAST1+WEST|WEST1+EAST|SOUTH1+NORTH/.test(arr)){
    arr = arr.replace(/NORTH1+SOUTH|EAST1+WEST|WEST1+EAST|SOUTH1+NORTH/, '')
  }
  return arr.split('1').filter((s) => /[A-Z]+/.test(s))  
}
