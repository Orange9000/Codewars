const findShort = s => s.split(' ').map(function derp(elem){return elem.length}).sort(function sortnum(a,b){return a-b})[0]
