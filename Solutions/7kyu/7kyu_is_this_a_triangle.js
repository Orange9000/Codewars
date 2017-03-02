function isTriangle(a,b,c)
{
   arr = [a,b,c].sort((x,y) => x-y)
   return (arr[0]+arr[1]) > arr[2]
}
