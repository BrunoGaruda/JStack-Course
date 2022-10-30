// Essa é uma função assincrona

const apiCall = new Promise((resolve, reject) => {
  // console.log('dentro da promise')
  setTimeout(() => {
    resolve('Sucesso!')
    // reject('Erro!')
  }, 1000) // Essa função tem q ser completada proseguir
})

// ### Then / Catch ###

// Usando essa forma, o código não fica travado, foi colocado um console.log para provar isso, a função é enviada para ser processada mas a leitura do código continua, então como existe um delai de 1s, o console.log é emitido primero.
// Solução 1: usar o console.log depois do then
// fetch()
// Foi necessário passar o argumento para obter a palavra "Sucesso!"
apiCall
  .then(resposta => {
    console.log(resposta)
  })
  .catch(erro => {
    //catch(erro) é necessário passar o reject
    console.log(erro)
  })

console.log('Depois da promise...')

// ### Async / Await ###

// async function run() {
//   // Forma de obter a resposta
//   // const resposta = await apiCall
//   // console.log(resposta)

//   // Forma de obter o erro com Try e catch. Lembrando que o erro so vai existir caso a resposta não seja completada.
//   try {
//     const resposta = await apiCall
//     console.log(resposta)
//   } catch (erro) {
//     console.log(erro)
//   }
// }
// run()
