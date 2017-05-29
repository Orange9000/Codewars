var noIfsNoButs = function (a,b) {
  return {
         [a<b]: `${a} is smaller than ${b}`,
         [a>b]: `${a} is greater than ${b}`,
         [a==b]:`${a} is equal to ${b}`
         }[true]
}
