function totalBill(str) {
  const plates = (str.match(/r/g)||[]).length
  return (plates*2) - Math.floor(plates/5)*2
}
