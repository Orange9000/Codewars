function alphabetized(s) {
  var d = {a:[],b:[],c:[],d:[],e:[],f:[],g:[],h:[],
           i:[],j:[],k:[],l:[],m:[],n:[],o:[],p:[],
           q:[],r:[],s:[],t:[],u:[],v:[],w:[],x:[],y:[],z:[]};
  [...s.replace(/[^a-z]/gi,'')].forEach(e=>d[e.toLowerCase()].push(e))
  return Object.values(d).map(e=>e.join``).join``
}
