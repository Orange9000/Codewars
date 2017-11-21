const locales={ 0: 
   [ 'Deepwood Motte',
     'Shadow Tower',
     'Castle Black',
     'Eastwatch',
     'Bay of Seals' ],
  1: 
   [ 'The Stony Shore',
     'Torrhen\'s Square',
     'Winterfell',
     'The Dreadfort',
     'Karhold' ],
  2: 
   [ 'Flint\'s Finger',
     'Barrowtown',
     'Moat Cailin',
     'White Harbour',
     'Widow\'s Wat' ],
  3: [ 'Pyke', 'Seagard', 'The Twins', 'Sisterton', 'The Fingers' ],
  4: [ 'The Crag', 'Riverrun', 'Darry', 'The Eyrie', 'Gulltown' ],
  5: 
   [ 'Castamere',
     'Acorn Hall',
     'Harrenhal',
     'Maidenpool',
     'Dragonstone' ],
  6: 
   [ 'Lannisport',
     'Stoney Sept',
     'King\'s Landing',
     'Blackwater Bay',
     'Sharp Point' ],
  7: 
   [ 'High Garden',
     'Bitterbridge',
     'King\'s Wood',
     'Storm\'s End',
     'Evenfall' ],
  8: 
   [ 'Old Town',
     'Horn Hill',
     'Prince\'s Pass',
     'Planky Town',
     'Sunspear' ] }


const dirs = {
  'S':(n)=>[n,0],
  'W':(n)=>[0,-n],
  'E':(n)=>[0,n],
  'N':(n)=>[-n,0]
}


var finalDestination = function(currentPos, directions) {
  var crds=null
  for (var y of Object.keys(locales)) if (locales[y].includes(currentPos)) crds=[+y,locales[y].indexOf(currentPos)]
  
  for (var c of directions.split(' ')){
    let to=dirs[c[0]](+c.slice(1))
    crds = [crds[0]+to[0], crds[1]+to[1]]
    
    //off the map check
    if (crds[0]<0) return "The Wall blocks your way"
    if (crds[0]>8 || crds[1]>4 || crds[1]<0) return "You do not have a ship to cross this sea."
  }
  return locales[crds[0]][crds[1]]
}
