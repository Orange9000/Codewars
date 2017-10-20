function hungrySeven(arr){
  var a=JSON.stringify(arr)
  var b=a.replace(/(7),(8),(9)/, '$2,$3,$1')
  return a===b ? eval(b) : hungrySeven(eval(b))
}
