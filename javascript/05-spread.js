const user = {
  firstName: 'Bruno',
  lastName: 'Almeida',
  age: 32,
  instagram: '@bruno.garuda',
  skills: [' back-end', ' front-end', ' mobile', ' UI/UX'],
  active: false
}

// user.active = true
// Object.assign(user, { active: true })

// const updatedUser = {
//   firstName: user.firstName,
//   lastName: user.lastName,
//   age: user.age,
//   instagram: user.instagram,
//   skills: user.skills,
//   active: true
// }

// Spread (espalhar) operador
// Renomeando (sobrescrevendo o  active)
const updatedUser = {
  ...user,
  skills: [...user.skills, 'Marketing'],
  active: true
}

console.log({ user })
console.log({ updatedUser })
