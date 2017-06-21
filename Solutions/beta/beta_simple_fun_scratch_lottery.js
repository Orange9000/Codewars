function scratch(lottery){
  return lottery.map(e=> new Set(e.split(' ')).size==2 ? Number(e.split(' ')[3]) : 0)
                .reduce((x,y)=>x+y,0)
}
