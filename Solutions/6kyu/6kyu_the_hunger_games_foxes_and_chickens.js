var caged = new RegExp(/\[([CF\.]+)\]/, 'g')
var cage_remover = new RegExp(/\[[CF\.]+\]/, 'g')
var outsiders = new RegExp(/(^[CF\.]+\[)|(\][CF\.]+\[)|(\][CF\.]+$)/, 'g')


var hungryFoxes = function(farm) {

   // caged chicken
   farm = farm.replace(caged, s => s.includes('F') ? 
                                               s.replace(/C/g, '.')
                                               :
                                               s)
   // outside cage chicken
   if (farm.replace(cage_remover, '').includes('F')) {
     farm = farm.replace(outsiders, s => s.replace(/C/g, '.'))
   }
   
   // no cages and fox outside
   var check = new Set(farm)
   return check.has('F') && !check.has('[') ? farm.replace(/C/g, '.') : farm
 }
