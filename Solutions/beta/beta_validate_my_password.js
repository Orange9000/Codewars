function validPass(password){
  return password.match(/(?=.*[a-z])(?=.*[0-9])^[a-z\d]{3,20}$/i) ? 'VALID' : 'INVALID'
}
