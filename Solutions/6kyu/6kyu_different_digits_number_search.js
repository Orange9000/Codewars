function differentDigitsNumberSearch(arr) {
  for (var j of arr) {
    if (String(j).length == new Set(String(j)).size) {
      return j
    }
  }
  return -1
}
