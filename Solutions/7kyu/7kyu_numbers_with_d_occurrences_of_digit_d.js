function isDd(n) {
  var c={}; [...''+n].forEach(e=>c[e]==undefined ? c[e]=1 : c[e]++);
  return Object.keys(c).some(e=>+c[e]==e)
}
