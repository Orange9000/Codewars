String.prototype.kontti = function(){
  return this.split(' ').map(e => /[aeiouy]/.test(e) ? switcher(e) : e).join(' ')
}

function switcher(s){
  let idx = /[aeiouy]/.exec(s).index
  return 'ko' +  s.slice(idx+1, s.length) + '-' + s.slice(0, idx+1) + 'ntti'
}
