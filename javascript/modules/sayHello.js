// module.exports = function sayHello(name) {
//   console.log(`Olá, ${name}`)
// }
// export default function sayHello(name) {
//   console.log(`Olá, ${name}`)
// }

// Caso queira exportar com o mesmo nome, é so usar como objeto, e importar também como objeto

export function sayHello(name) {
  console.log(`Olá, ${name}`)
}

const userName = 'Bruno'
export default userName
