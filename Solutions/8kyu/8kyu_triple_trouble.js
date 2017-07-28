function tripleTrouble(one, two, three){
  return [...one].map((e,i)=>e+two[i]+three[i]).join('')
}
