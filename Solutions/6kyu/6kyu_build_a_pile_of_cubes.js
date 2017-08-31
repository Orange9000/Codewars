function findNb(m, t=0, n=0) {
  return m > 0 ? findNb(m-Math.pow(n+1,3), t+1, n+1) : m<0 ? -1 : t
}
