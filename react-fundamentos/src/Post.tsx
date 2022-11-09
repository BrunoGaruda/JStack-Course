import React, { PropsWithChildren } from 'react'
import PostHeader from './PostHeader'

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
  // theme: string
}

export default function Post(props: postInterface) {
  return (
    <>
      <article>
        <PostHeader
          // theme={props.theme}
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read
          }}
        />
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Média de likes: {props.post.likes / 2}
      </article>
      <br />
    </>
  )
}
