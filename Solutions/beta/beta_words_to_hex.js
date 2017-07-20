function wordsToHex(words) {
  return words.split(' ').map(w=>('#' + w.split('')
                                         .slice(0,3)
                                         .map(e=>e.charCodeAt().toString(16))
                                         .join('')
                                         + '000000').slice(0,7))
}
