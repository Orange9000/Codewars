function nameInStr(str, name){
  return new RegExp([...name].join('.*'), 'i').test(str)
}
