function sumAccounts(text) {
  return text.match(/\-?\$\d+/gi).map((s) => parseInt(s.replace('$',''))).reduce((x,y) => x+y);
}
