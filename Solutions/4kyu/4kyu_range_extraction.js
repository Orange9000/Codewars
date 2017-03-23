function solution(list){
  var result = []
  var temp   = []
  for (var i = 0; i < list.length; i++) {
  
    // if next elem is bigger by 1 then accumulate
    if (list[i] + 1 === list[i+1]) { temp.push(list[i]) }
    
    else {
      // if current element bigger by 1 than previous one => accumulate
      // if not => push into result as is
      list[i] - 1 === temp.slice(-1)[0] ? temp.push(list[i]) : result.push(String(list[i])) 
      
      
      // gathering ranges from accumulated consequtive numbers
      // get ranges if range diff is > 1
      // if not => push into result one by one
      if (temp.length >= 3) { result.push(String(temp[0]) + '-' + String(temp.slice(-1))) }
      else { for (var j of temp) { result.push(String(j)) }}
      
      // empty accumulated results
      temp = []
    }
  }  
  return result.join(',')
}
