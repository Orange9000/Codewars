function makesTheSentence(characterArray, sentenceString) {
  return characterArray.sort().join('')==[...sentenceString.replace(/\s/g, '')].sort().join('')
}
