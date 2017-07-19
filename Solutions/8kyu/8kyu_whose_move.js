function whoseMove(lp, win) {
  return lp&&win ? lp : {'black':'white','white':'black'}[lp]
}
