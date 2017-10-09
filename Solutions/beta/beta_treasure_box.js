const regex = {
'1' :/one/i,
'2' :/two/i,
'3' :/three/i,
'4' :/four/i,
'5' :/five/i,
'6' :/six/i,
'7' :/seven/i,
'8' :/eight/i,
'9' :/nine/i,
'10':/ten/i
}


function findNum(s){
  const st = s.replace(/[^a-z]/gi, '')
  for (var r of Object.keys(regex)) if (regex[r].test(st)) return Number(r)
}
