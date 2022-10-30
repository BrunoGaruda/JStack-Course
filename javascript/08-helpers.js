const tech = 'Node.js'
const array = ['Node.js', 'JavaScript', 'React', 'Typescript']

// funciona como um control F, para verificar se existe alguma string dentro de outra string como boolean
const includes = tech.includes('a')

// Para arrays é necessário utilizar a palavra completa e da forma escrita exatamente
const includesArray = array.includes('JavaScript')

// Pesquisa para o começo da paladra
const startsWith = tech.startsWith('Nod')

// Pesquisa para o fim da paladra
const endsWith = tech.endsWith('Nod')

console.log({ includes })
console.log({ includesArray })
console.log({ startsWith })
console.log({ endsWith })
