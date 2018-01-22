function check(s) {
  return [...s.slice(1,s.indexOf('*'))]
         .map(e=>e.charCodeAt())
         .reduce((x,y)=>x^y,0)
         .toString(16)
         .toUpperCase()==s.split('*')[1].toUpperCase().replace(/[^A-F\d]/g,'')
}
