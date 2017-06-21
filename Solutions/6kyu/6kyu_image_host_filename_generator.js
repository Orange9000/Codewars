const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

function generateName()
{
  const res = Array(6).fill(null)
                      .map(e=>alpha[Math.floor(Math.random()*52)])
                      .join('')
  return photoManager.nameExists(res) ? generateName() : res                 
}
