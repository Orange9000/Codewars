function revamp(s) {
  return s.split(" ")
         .map(s => Array.from(s).sort().join(""))
         .sort((a,b) => sortFunc(a) - sortFunc(b))
         .join(" ")
}

function sortFunc(word) {
  return Array.from(word).map(c => c.charCodeAt()).reduce((x,y) => x + y)
}
