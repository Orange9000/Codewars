var code = [5,5,5]

function tryCode(indications) {
  indications instanceof Array ? null : indications = [0,0,0]
  code = code.map((e,i)=> e + indications[i])
  return code
}
