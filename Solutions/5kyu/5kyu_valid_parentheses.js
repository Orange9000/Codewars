function validParentheses(parens){
  while (/\(\)/.test(parens)) { parens = parens.replace(/\(\)/, '') }
  return parens ? false : true  
}
