import React, { PropsWithChildren } from 'react'

interface postInterface {
  // post é um objeto, portanto, é necessario tipar sendo um objeto na interface
  post: {
    id: number
    title: string
    subtitle: string
    read: boolean
    likes: number
  }
  // Já que é uma função, void é usado onde não há dados para retornar valores, você poderá especificar void como tipo de retorno.
  // onRemove: () => void
  onRemove: any // tornei o tipo any para evitar o erro do (props.post.id), momentaneamente
}

export default function Post(props: postInterface) {
  return (
    <>
      <article>
        <strong>
          {/* 1ª opção: renderização condicional com operador ternário*/}
          {props.post.read ? <s>{props.post.title}</s> : props.post.title}

          {/* 2ª opção: Short circuit evaluation */}
          {/* {props.post.read && <s>{props.post.title}</s>}
          {!props.post.read && props.post.title} */}
        </strong>
        {/* É necessário passar a arrow function para executar o onRemove com a props.post.id  */}
        <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Média de likes: {props.post.likes / 2}
      </article>
      <br />
    </>
  )
}
