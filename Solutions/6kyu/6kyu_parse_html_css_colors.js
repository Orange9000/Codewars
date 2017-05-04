function parseHTMLColor(color) {
  var call = PRESET_COLORS[color.toLowerCase()]
  if (call != undefined) { color = call }
                
  var len = color.length
  
  len == 7 ? color = color.slice(1,len).match(/.{2}/g).map(x=> parseInt(x, 16)) 
             :
             color = color.slice(1,len).match(/.{1}/g).map(x=> parseInt(x+x, 16))

  return {r:color[0], g:color[1], b:color[2]}                      
}
