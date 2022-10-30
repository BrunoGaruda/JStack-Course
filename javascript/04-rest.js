const user = {
  firstName: 'Bruno',
  lastName: 'Almeida',
  full_name: 'Nome Completo', // Exemplo
  age: 32,
  instagram: '@bruno.garuda',
  skills: [' back-end', ' front-end', ' mobile', ' UI/UX']
}

// Rest (resto) operador, ele tem que ser a ultima regra da desestruturação
// Adicionando o firstName e skills, ele retira e os ... se encarrega do resto
const { firstName, skills, ...restUser } = user

const [[primary], ...restSkills] = skills

console.log(restSkills)
