// // require serve pra importar todo tipo de módulo através do caminho
// const { printName, lastName } = require('./printName')

// printName(`Bruno ${lastName}`)

// Modulo nativo do node não precisa de caminho, so basta usar o nome do modulo
const os = require('os')

console.log(os.type())
