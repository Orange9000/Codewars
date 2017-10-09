function simple_assembler(program) {
  const commands = program
                   .map(e=>e.split(' '))       
  var reg = {}
  var idx = 0
  
  while (true){
    if (idx>=commands.length){break}
    
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
