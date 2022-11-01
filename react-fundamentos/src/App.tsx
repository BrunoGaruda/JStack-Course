import React from 'react'
import Post from './Post'
import Header from './Header'
// const catergory = 'Posts da semana'

// Props, vamos renderizar o conteudo do componente de forma dinâmica
export function App() {
  return (
    <>
      <Header title="Notícia da semana 01">
        <div>
          {/* tive que colocar uma div ao fragment parar concertar o erro 
          https://github.com/mbrn/material-table/issues/653
          */}
          <h4>Subtítulo da semana 01</h4>
        </div>
      </Header>
      <hr />

      <Post
        likes={20}
        post={{
          title: 'Título da notícia 01',
          subtitle: 'Subtitulo da notícia 01'
        }}
      />
      <Post
        likes={10}
        post={{
          title: 'Título da notícia 02',
          subtitle: 'Subtitulo da notícia 02'
        }}
      />
      <Post
        likes={50}
        post={{
          title: 'Título da notícia 03',
          subtitle: 'Subtitulo da notícia 03'
        }}
      />
    </>
  )
}
