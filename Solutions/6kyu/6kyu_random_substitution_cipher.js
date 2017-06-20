const alpha = [..."abcdefghijklmnopqrstuvwxyz"]

function randomSub() {
  return newAbc().map((e,i)=> [alpha[i],e])
                 .reduce(function (obj, n) {
                           obj[n[0]] = n[1];
                           return obj;
                         }, {})
}

function newAbc(){
  var res = new Set();
  while (res.size != 26){
    res.add(alpha[Math.floor(Math.random()*26)])
  }
  return Array.from(res)
}
