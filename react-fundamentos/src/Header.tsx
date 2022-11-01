interface headerInterface {
  title: string
  children: React.ReactNode
  // children: any | null
  // children: JSX.Element[] | JSX.Element // https://stackoverflow.com/questions/53688899/what-is-the-type-of-the-children-prop
}

export default function Header(props: headerInterface) {
  return (
    <>
      <h1>{props.title}</h1>
      {/* tag especial que ira renderizar tudo que estiver dentro do header, o filho */}
      <h2>{props.children}</h2>
    </>
  )
}
