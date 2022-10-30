const user = {
  firstName: 'Bruno',
  lastName: 'Almeida',
  full_name: 'Nome Completo', // Exemplo
  age: 32,
  instagram: '@bruno.garuda',
  skills: [' back-end', ' front-end', ' mobile', ' UI/UX']
}

// Destructuring
const { firstName, lastName, age, skills, full_name: fullName } = user
const [primary, secondary, tertiary, quartenary] = skills

// Atribuindo spred para todas as skills
console.log(
  `Eu ${firstName} ${lastName}, tenho ${age} anos de idade, com ${[
    ...skills
  ]} de skills.`
)
// Eu Bruno Almeida, tenho 32 anos de idade, com  back-end, front-end, mobile, UI/UX de skills.

// Atribuindo a desestruturação para elementos específicos do array skills
console.log(
  `Eu ${firstName} ${lastName}, tenho ${age} anos de idade, com ${[
    secondary,
    quartenary
  ]} de skills.`
)
// Eu Bruno Almeida, tenho 32 anos de idade, com  front-end, UI/UX de skills.

// const firstName = user.firstname
// const age = user.age
// console.log(
//   `Eu ${user.firstName} ${user.lastName}, tenho ${user.age} anos de idade.`
// )

// propriedade do objeto full_name foi renomeado na desestruturação L11
console.log(fullName)
