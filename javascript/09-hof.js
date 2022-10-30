const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'iPod', price: 2000, quantity: 5 },
  { name: 'MacBook Pro', price: 22000, quantity: 1 }
]

//  ### find & findIndex ###
// .find retorna o primeiro elemento que for true
const find = array.find(product => {
  // console.log('é um iPhone?', product.name === 'iPhone')
  // return true // Só irá retornar os elementos "true no log"

  // return product.name === 'MacBook Pro'

  // retornando com uma condição. retorna o primeiro elemento que for true
  return product.price > 1000
})
// console.log({ find })

// .findIndex vai terornar a posição do objeto vai estar
const findIndex = array.findIndex(product => product.quantity <= 1)
// console.log({ Produto: array[findIndex] })

// ### some & every ###
// some: algum dos itens vai verificar se a condição é verdadeira
const some = array.some(product => product.price < 1000)
// console.log({ some })

// every:  vai verificar se todos os itens tem a condição é verdadeira, todos tem que cumprir para retornar true
const every = array.every(product => product.price > 1000)
// console.log({ every })

// .map
// Clona o array com algumas novas funcionalidades
const map = array.map(product => {
  return {
    ...product,
    peding:
      product.price <= 10000 && product.quantity <= 10
        ? (product.peding = (product.quantity / product.quantity) * 10) -
          product.quantity
        : (product.peding = (product.quantity / product.quantity) * 5) -
          product.quantity
  }
})
// console.log({ map })

// .filter vai filtrar o produto de acordo com a regra imposta
const filter = array.filter(product => {
  // console.log(
  //   product.quantity > 1
  //     ? `Temos o produto ${product.name} em estoque.`
  //     : `Não tempos o produto ${product.name}, o único é o mostruário.`
  // )
})

// .reduce recebe 2 argumentos, um deles é o accumulator que armazena o valor durante percorre o objeto, e o product. Enquanto ele percorre, ele salva o valor para a próxima interação
const reduce = array.reduce((accumulator, product) => {
  return (accumulator + product.price * product.quantity) * 0.8
}, 0)
console.log({ reduce })
