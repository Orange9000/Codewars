const trans = {'1234567890*#':1,
               'adgjmptw':2,
               'behknqux':3,
               'cfilorvy':4,
               'sz':5}

function mobileKeyboard(str){
  return str.split('')
            .map(e=>trans[
                         Object.keys(trans)
                               .filter(p=>p.includes(e))
                         ]
                 ).reduce((x,y)=>x+y,0)
}
