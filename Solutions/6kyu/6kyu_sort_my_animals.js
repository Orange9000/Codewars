function sortAnimal(animal) {
  if (animal==null){return animal}
  return animal.sort(function(a,b){
                     if (a.numberOfLegs<b.numberOfLegs) { return -1 }
                     if (a.numberOfLegs>b.numberOfLegs) { return  1 }
                     if (a.numberOfLegs==b.numberOfLegs){
                       return a.name>b.name
                     }  
                     })
}
