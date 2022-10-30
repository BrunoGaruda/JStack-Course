import React from 'react'
import Post from './Post'
import Header from './Header'
// const catergory = 'Posts da semana'

// Props, vamos renderizar o conteudo do componente de forma dinâmica
export function App() {
  return (
    <>
      <Header title="Notícia da semana 01">
        <h2>Subtítulo da semana 01</h2>
      </Header>
      <hr />

      <Post
        post={{
          title: 'Título da notícia 01',
          subtitle: 'Subtitulo da notícia 01'
        }}
      />
      <Post
        post={{
          title: 'Título da notícia 02',
          subtitle: 'Subtitulo da notícia 02'
        }}
      />
      <Post
        post={{
          title: 'Título da notícia 03',
          subtitle: 'Subtitulo da notícia 03'
        }}
      />
      <Post
        post={{
          title: 'Título da notícia 04',
          subtitle: 'Subtitulo da notícia 04'
        }}
      />
    </>
  )
}
