const reversed={}
Object.keys(phonebook).forEach(e=>reversed[phonebook[e]]=e)


function closestFriends(history) {
  calls={}
  
  history
  .map(e=>[reversed[e.slice(0,14)], total(e.slice(16))])
  .forEach(e=>calls[e[0]]==undefined ? calls[e[0]]=e[1] : calls[e[0]]+=e[1])
  
  return Object.keys(calls)
         .sort((a,b)=>calls[b]-calls[a])
         .slice(0,3)
}



function total(s){
  return s.split(':')
         .map((e,i)=>i==0 ? Number(e)*3600 : i==1 ? Number(e)*60 : Number(e))
         .reduce((x,y)=>x+y)
}
