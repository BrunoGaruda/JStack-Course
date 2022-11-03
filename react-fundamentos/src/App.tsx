import React, { useState } from 'react'
import Post from './Post'
import Header from './Header'
import { METHODS } from 'http'
// const catergory = 'Posts da semana'

// interface postsArray {
//   id: string
//   title: string
//   subtitle: string
//   likes: number
// }

// Props, vamos renderizar o conteudo do componente de forma dinâmica
export function App() {
  // Foi necessário a desestruturação do array para manter o principio de imutabilidade. O react trabalha com SPA e não é necessário a renderização do array, apenas do que foi alterado, o estado.
  const [posts, setPosts] = useState([
    { id: 1, title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
    { id: 2, title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
    { id: 3, title: 'Title#03', subtitle: 'Sub#03', likes: 50 },
    { id: 4, title: 'Title#04', subtitle: 'Sub#04', likes: 100 }
  ])

  function handleRefresh() {
    // Método push copia o array e o altera. No react é diferente, não vai funcionar. React trabalha com valores imutáveis
    // posts.push()

    // o prevState serve para intermediar o posts evitando possíveis erros
    setPosts(prevState => [
      ...prevState, //...posts
      {
        id: posts.length + 1,
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: Math.ceil(Math.random() * 1000)
      }
    ])
  }

  // O componente pai (App) é quem pode fazer alterações no componente filho Post. Neste caso, a função de remoção está aqui no App e sera atribuida como propriedade no componente <Post> nesse arquivo.
  // proprierade postID teve q ser usada para ser renderizada no log.
  function handleRemovePost(postID: number) {
    // Filter vai retornar o array de post com a condição true. Deixando o === ele vai eliminar os outros e deixar apenas o que foi clicado. Mas com !== ele vai tirar o q foi clicado e manter o resto, que é o nosso propósito.
    setPosts(prevState => prevState.filter(post => post.id === postID))
  }

  return (
    <>
      <Header>
        <div>
          {/* tive que colocar uma div ao fragment parar concertar o erro 
          https://github.com/mbrn/material-table/issues/653
          */}
          <h4>
            Subtítulo da semana 01
            <button onClick={handleRefresh}>Atualizar</button>
          </h4>
        </div>
      </Header>
      <hr />

      {posts.map(posts => (
        <Post
          key={posts.id} // Foi necessário atribuir a Key para retirar o erro, sempre que foi atribuir uma lista, tem q colorar a Key.
          onRemove={handleRemovePost} // propriedade da função handleRemovePost
          likes={posts.likes}
          post={{
            id: posts.id,
            title: posts.title,
            subtitle: posts.subtitle
          }}
        />
      ))}
    </>
  )
}
