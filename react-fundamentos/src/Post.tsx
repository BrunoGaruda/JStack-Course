import React from 'react'

interface postInterface {
  // post é um objeto, portanto, é necessario tipar sendo um objeto na interface
  post: {
    title: string
    subtitle: string
  }
  likes: number
}

export default function Post(props: postInterface) {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong>
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Média de likes: {props.likes / 2}
      </article>
      <br />
    </>
  )
}
