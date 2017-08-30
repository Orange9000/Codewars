function uniTotal(s)
{
  return s.length==0 ? 0 : [...s].reduce((acc,x)=> acc + x.charCodeAt(0),0)
}
