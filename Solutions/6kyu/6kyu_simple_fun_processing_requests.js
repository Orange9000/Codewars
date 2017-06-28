function processingRequests(servers, requests) {

  var tots = 0
  var srtd = requests.sort((a,b)=>a-b)
  
  for (var i=2; i<servers*2+1; i+=2){
    if (srtd[0] <= i) { srtd.shift(); tots++ }
  }
  return tots
}
