function describeTheShape( n ){
  return n<3 ? "this will be a line segment or a dot" : `This shape has ${n} sides and each angle measures ${Math.floor((180*(n-2))/n)}`
}
