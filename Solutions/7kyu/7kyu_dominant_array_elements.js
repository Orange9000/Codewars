function solve(arr){
  return arr.filter((e,i)=>arr.slice(i+1).every(el=>el<e))
};
