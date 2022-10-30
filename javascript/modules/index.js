// const sayHello = require('./sayHello')
// import { sayHello } from './sayHello.js'
// Caso queira renomear usa o "as"
import userName, { sayHello as sayHello2 } from './sayHello.js'

// sayHello('Bruno')
sayHello2(userName)

// Para importar na forma d export default, é necessário alterar o arquivo para .mjs ou criar um package.json com "type": "module"
