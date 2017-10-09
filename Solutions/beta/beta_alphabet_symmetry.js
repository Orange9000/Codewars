function solve(arr){  
  return arr.map(e=>calc(e))
};


function calc(word){
  return [...word.toLowerCase()].filter((e,i)=>(e.charCodeAt()-96)==i+1).length
}
