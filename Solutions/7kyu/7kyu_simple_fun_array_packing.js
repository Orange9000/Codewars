const arrayPacking = (a) => parseInt(a.map(num => '0'.repeat(8-num.toString(2).length) + num.toString(2)).reverse().join(''), 2)
