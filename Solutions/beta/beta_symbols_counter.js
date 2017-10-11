const transform = (s) => {
  const c={}; [...s].forEach(e=>c[e]==undefined? c[e]=1 : c[e]++)
  return [...new Set(s)].map(e=>c[e]==1 ? e : e+c[e]).join('')
}
