function multiTable(number) {
  return [...Array(10)].map((e,i)=>`${i+1} * ${number} = ${(i+1)*number}`).join('\n')
}
