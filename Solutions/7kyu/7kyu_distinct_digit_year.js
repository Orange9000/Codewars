function distinctDigitYear(year) {
  for (var j=year+1; j<9999; j++) if ( (new Set([...''+j])).size==4 ) return j  
}
