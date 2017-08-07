function foldTo(d, p=0.0001, c=0) {
  if (d<=0) { return null }
  return p >= d ? c : foldTo(d, p*2, c+1)
}
