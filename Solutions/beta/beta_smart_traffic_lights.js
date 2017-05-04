function SmartTrafficLight(st1, st2){
  this.inp = [st1,st2].sort((x,y) => x[0] - y[0])
}

SmartTrafficLight.prototype.turngreen = function(){
  return this.inp.length == 0 ? null : this.inp.pop()[1]
}
