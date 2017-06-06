function expandedForm(num) {
  return String(num).split('')
                    .reverse()
                    .map((e,i)=> e*Math.pow(10,i))
                    .reverse()
                    .filter(e=>e!=false)
                    .join(' + ')
                    
}
