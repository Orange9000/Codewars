function spongeMeme(sentence) {
  return [...sentence].map((e,i)=>i%2==0? e.toUpperCase() : e.toLowerCase()).join('')
}
