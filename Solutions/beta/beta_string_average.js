const nums = [
'zero',
'one',
'two',
'three',
'four',
'five',
'six',
'seven',
'eight',
'nine'
]


function averageString(str) {
  return str ? avg( str.split(' ').map(e=>nums.indexOf(e)) ) : 'n/a'
}

const avg = (arr) => arr.includes(-1)
                     ?
                     'n/a'
                     :
                     nums[Math.floor( arr.reduce((x,y)=>x+y)/arr.length )]
