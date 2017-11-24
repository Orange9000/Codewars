function malwareValidate(arr) {
  return [...new Set(arr.filter(e=>(e.match(/[a-z]/g)||[]).length==5 && (e.match(/\d/g)||[]).length==5 && e.length==10))]
}
