module.exports = (app, texto) => {
  function salvar(req, res) {
    res.send('Produto > Salvar >' + texto)
  }
  
  function obter(req, res) {
    res.send('Produto > Obter >' + texto)
  }

  app.post('/produto', salvar)
  app.get('/produto', obter)

  return  {salvar, obter}
}