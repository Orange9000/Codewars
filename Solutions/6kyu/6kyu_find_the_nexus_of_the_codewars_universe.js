function nexus(users) {
  return Object.keys(users)
               .map(e=>[Number(e), Math.abs(e-users[e])])
               .sort(function (a,b){
                       if (a[1] != b[1]) { return a[1]-b[1] }
                       if (a[1] == b[1]) { return a[0]-b[0] } 
                     })[0][0]
}
