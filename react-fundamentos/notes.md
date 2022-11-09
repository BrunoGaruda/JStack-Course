# Criando o projeto

yarn create react-app <nome do projeto> --template typescript

# Criando a estrutura do projeto

- Na pasta Public:
  • Limpar o index, deixando o <div> id="root"; <noscript>; <title>.
  • Apagar o resto.

- Na pasta src:
  • deixar apenas index.tsx; App.tsx; react-app-env.d.ts.

  - No index.tsx:
    • Deixar apenas os imports de react; react-dom e {App}. Deixar também o const root com o render <App />.
  - No App.tsx
    • Deixar apenas a export function App com o retorno da <div>

- No package.json:
  • Colocar os @types e o typescript como dependencia de desenvolvimento ("devDependencies").

# Criando componentes

- Funcional Component (function)
- Class Component (class), deixando de lado ao primeiro momento

# Conceitos do App e seus componentes

- O <App/> será onde será renderizado todos os componentes
- Sempre terá que importar os componentes com o nome (primeira letra maiúscula) seguido de from e seu caminho relativo.
- Todos a serem exportados(componentes) vão precisar deum export default nas functions de cada componente.

# Tipando usando interface ao invés de PropTypes

- interface <nomeDaInterface> { object: {types} types: ex: string, number}
- inserir o nome da intarface no props: <nomeDaInterface> como argumento da função

# Usando useState

- criando o estado usando useState, com conteito de imutabilidade, e renderizado os posts utilizando um spread com o array.
- atualizando o ...posts para prevState, servindo para intermediar o posts evitando possíveis erros.

# Criando uma função para remover os posts

- Utilizando a função handleRemovePost como callback ao <App> pois somente o pai que pode modificar o filho(componente), sabendo disso, foi atribuido o onRemove dentro do <Post>. No componente foi passada a função callback com onClick e passando as props.onRemove(props.post.id).
- Dentro da função handleRemovePost foi posto o filter, que vai retornar o array de post com a condição true. Deixando o === ele vai eliminar os outros e deixar apenas o que foi clicado. Mas com !== ele vai tirar o q foi clicado e manter o resto, que é o nosso propósito.

# Renderização condicinal

- Usa um operador ternário dentro de chaves(javascript), para fazer a condição
- Usa um Short circuit evaluation para fazer a mesma coisa.

# Dividindo os componentes em PostHeader e Button

- Foram criados o Button e o PostHeader como componentes para simplificar e não deixar tudo no Header.
- Button é filho do PostHeader que é filho do Header que é filho do App.

# Criando o Botão para alterar o tema

- criando o botão com o tema dark ou light e tipando "theme", em todos os componentes.

# Criando o context

- Foi criado o ThemeContext para envolver todos os compoentes do <App> tornando-o o pai. Com isso iremos controlar todas as props dos componentes filhos através de um valor(alguma propriedade que você vai usar o context)
