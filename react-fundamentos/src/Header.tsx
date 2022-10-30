import React from 'react'

export default function Header(props: any) {
  return (
    <>
      <h1>{props.title}</h1>

      {/* tag especial que ira renderizar tudo que estiver dentro do header, o filho */}
      <h3>{props.children}</h3>
    </>
  )
}
