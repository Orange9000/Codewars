function vestBuy(price, haggle, q = {'l':.8,'m':.7,'h':.6,'w':.1}[haggle[0]]){                                  
  return q==undefined ? 'Run!!' : price * q
}
