function salvar(req, res) {
  res.send('Usuario > Salvar')
}

function obter(req, res) {
  res.send('Usuario > Obter')
}

module.exports = {salvar, obter}
