function electionsWinners(votes, k) {
  const mx = Math.max(...votes)
  const re = new RegExp(mx, "g")
  return !k && String(votes).match(re).length == 1 ? 1 : votes.map(candidate => (candidate + k) > mx ? 1 : 0).reduce((x,y) => x+y)
}
