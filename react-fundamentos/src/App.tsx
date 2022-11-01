import React from 'react'
import Post from './Post'
import Header from './Header'
// const catergory = 'Posts da semana'

const posts = [
  { title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
  { title: 'Title#01', subtitle: 'Sub#01', likes: 10 },
  { title: 'Title#01', subtitle: 'Sub#01', likes: 50 }
]

// Props, vamos renderizar o conteudo do componente de forma dinâmica
export function App() {
  return (
    <>
      <Header>
        <div>
          {/* tive que colocar uma div ao fragment parar concertar o erro 
          https://github.com/mbrn/material-table/issues/653
          */}
          <h4>Subtítulo da semana 01</h4>
        </div>
      </Header>
      <hr />

      {posts.map(posts => (
        <Post
          key={posts.title} // Foi necessário atribuir a Key para retirar o erro, sempre que foi atribuir uma lista, tem q colorar a Key.
          likes={posts.likes}
          post={{
            title: posts.title,
            subtitle: posts.subtitle
          }}
        />
      ))}
    </>
  )
}
