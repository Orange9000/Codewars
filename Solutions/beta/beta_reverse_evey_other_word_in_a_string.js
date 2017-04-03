const reverse = (str) => str.split(' ').map((e,i)=> i%2==0 ? e : e.split('').reverse().join('')).join(' ')
