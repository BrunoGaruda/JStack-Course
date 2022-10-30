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
