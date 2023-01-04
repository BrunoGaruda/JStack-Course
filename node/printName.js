exports.printName = name => {
  console.log(name)
}

// O exports pod ser usado no momento da criação
exports.lastName = 'Leonardo'

// pode se exportar qualquer tipo de dado, ex: array, objeto, string, etc...
// module.exports serve parar habilitar que esse arquivo seja acessado por outro
module.exports = { printName, lastName }
