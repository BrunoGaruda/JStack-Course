import React, { useContext } from 'react'
import Button from './Button'
import { ThemeContext } from './ThemeContext'
import './Header.css'

interface headerInterface {
  // title: string
  children: React.ReactNode

  // onToogleTheme?: () => void
  // theme?: string
}

export default function Header(props: headerInterface) {
  const onToogleTheme = useContext(ThemeContext)

  return (
    <div>
      {/* <h1>{props.title}</h1> */}
      <h1 className="title">Notícia da semana 01</h1>
      {/* tag especial que ira renderizar tudo que estiver dentro do header, o filho */}
      <Button
        // theme={props.theme}
        onClick={onToogleTheme}
      >
        Mudar tema
      </Button>
      <h2>{props.children}</h2>
    </div>
  )
}
