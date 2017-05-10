var color2grey = function (image) {
  return image.map(subarr => subarr.map(subsubarr => Array(3).fill(Math.round(subsubarr.reduce((x,y)=>x+y)/3))))
}
