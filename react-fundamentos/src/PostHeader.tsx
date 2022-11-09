import React from 'react'
import Button from './Button'

interface postHeaderInterface {
  // post é um objeto, portanto, é necessario tipar sendo um objeto na interface
  post: {
    id: number
    title: string
    read: boolean
  }
  // Já que é uma função, void é usado onde não há dados para retornar valores, você poderá especificar void como tipo de retorno.
  // onRemove: () => void
  onRemove: any // tornei o tipo any para evitar o erro do (props.post.id), momentaneamente
  // theme: string
}

export default function PostHeader(props: postHeaderInterface) {
  return (
    <>
      <strong>
        {/* 1ª opção: renderização condicional com operador ternário*/}
        {props.post.read ? <s>{props.post.title}</s> : props.post.title}

        {/* 2ª opção: Short circuit evaluation */}
        {/* {props.post.read && <s>{props.post.title}</s>}
      {!props.post.read && props.post.title} */}
      </strong>
      {/* É necessário passar a arrow function para executar o onRemove com a props.post.id  */}
      <Button
        // onClick={props.onRemove}
        // theme={props.theme}
        onClick={() => props.onRemove(props.post.id)}
      >
        Remover
      </Button>
    </>
  )
}
