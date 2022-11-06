import Button from './Button'

interface headerInterface {
  // title: string
  children: React.ReactNode
  // children: any | null
  // children: JSX.Element[] | JSX.Element // https://stackoverflow.com/questions/53688899/what-is-the-type-of-the-children-prop

  // aparentemente só funciona com any, tem que pesquisar qual o tipo exato nessa situação
  onToogleTheme: any
  theme: string
}

export default function Header(props: headerInterface) {
  return (
    <>
      {/* <h1>{props.title}</h1> */}
      <h1>Notícia da semana 01</h1>
      {/* tag especial que ira renderizar tudo que estiver dentro do header, o filho */}
      <Button theme={props.theme} onClick={props.onToogleTheme}>
        Mudar tema
      </Button>
      <h2>{props.children}</h2>
    </>
  )
}
