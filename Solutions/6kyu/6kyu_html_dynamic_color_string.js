var generateColor = function() {
  return '#'+('0'.repeat(5)+
         (Math.ceil(Math.random()*16777215)-Math.floor(Math.random()*100))
         .toString(16))
         .slice(-6)
         
};
