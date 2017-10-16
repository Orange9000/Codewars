const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-='
const link = 'https://www.random.org/integers/?num=100&min=100000&max=1000000&col=1&base=10&format=plain&rnd=new'
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


/*
stores 100 random floating point numbers
recieved via random.org request
rather ugly, but necessary workaround
since one request for every saveMathRandom call
makes the tests time out
*/
const randoms = rnd()
const used = []


function rnd()
{
    //https://stackoverflow.com/questions/247483/http-get-request-in-javascript
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", link, false )
    xmlHttp.send( null );
    return xmlHttp.responseText.match(/\d+/g).map(e=>+e/1e6)
}



class KataToolbox {
  static stripwhitespace(s){
    return s.replace(/[\s\n]/g,'')
  }
  static approxEquals(a,b){
    if (![a,b].every(e=>typeof e=='number')){
      throw ArgumentError('!')
    }
    return a.toFixed(3)==b.toFixed(3)
  }
  saveMathRandom(){
    for (var i=0; i<100; i++){
      if (!used.includes(i)) {
        used.push(i)
        return randoms[i]
      }
    }
  }
  static randomString(){
    return [...Array(10)]
           .map(e=>chars[Math.ceil(Math.random()*73)])
           .join('')
  }
  static userCheated(){
    return new Set([...Array(3)].map(e=>Math.random())).size == 1  
  }
}
