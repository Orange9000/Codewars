const d = {
        'w':4,'p':3,'b':2,'s':1,
        'm':-4,'q':-3,'d':-2,'z':-1
          }

function alphabetWar(fight)
{
  const r = fight.replace(/.?\*+.?/g, '')
                 .split('')
                 .map(e=>d[e]!=undefined ? d[e] : 0) 
                 .reduce((x,y)=>x+y,0)
                 
  return {[r==0]: "Let's fight again!",
          [r>0] : "Left side wins!",
          [r<0] : "Right side wins!"
          }[true]
}          
