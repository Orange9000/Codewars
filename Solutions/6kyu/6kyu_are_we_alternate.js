function isAlt(word) {
  return !word.match(/[^aeiou]{2,}|[aeiou]{2,}/g)
}
