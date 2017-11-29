function cakes(r, a) {
  return Math.min(...Object.keys(r).map(e=>Math.floor(a[e]/r[e])))||0
}
