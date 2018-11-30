const al='abcdefghijklmnopqrstuvwxyz'

const moveStrBy = n => {
  return (s)=>[...s].map(e=>/[a-zA-Z]/.test(e) ? move(e,n) : e).join``    
};

function move(e,n){
  const cse = /[A-Z]/.test(e)
  var r = al.slice((al.indexOf(e.toLowerCase())+n)%26)[0]
  return cse ? r.toUpperCase() : r
}
