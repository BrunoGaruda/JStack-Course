import React, { useContext } from 'react'
import Button from '../Button/Button'

import { ThemeContext } from '../../context/ThemeContext'

import Title from '../../Title'

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
      <Title>BG Blog</Title>
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
