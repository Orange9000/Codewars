function newYorker(text) {
  return text.replace(/[\!\?\.]+(\s|$)/g, s=> ' my guy' + s)
}
