function simple_assembler(program) {
  const commands = program
             .map((e,i)=>[i,e])
             .reduce(function(obj,n){
                      obj[n[0]]=n[1].split(' ');
                      return obj;
                    }, {})
                    
  var reg = {}
  var idx = 0
  
  while (true){
    if (idx>Math.max(...Object.keys(commands))){break}
    
    const cmd = commands[idx]
    
    if (cmd[0]=='mov'){
      /\d+/.test(cmd[2]) ? reg[cmd[1]]=Number(cmd[2]) : reg[cmd[1]]=reg[cmd[2]]
      idx++
    }
    if (cmd[0]=='inc'){ reg[cmd[1]]++; idx++ }
    if (cmd[0]=='dec'){ reg[cmd[1]]--; idx++ }
    if (cmd[0]=='jnz'){
      reg[cmd[1]]!=0 ? idx=idx+(Number(cmd[2])) : idx++
    }
  }
  
  return reg

}
