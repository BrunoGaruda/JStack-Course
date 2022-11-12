import PostHeader from '../Post/PostHeader'
import '../Post'

import { Rate, Subtitle } from './styles'

interface postInterface {
  // post é um objeto, portanto, é necessario tipar sendo um objeto na interface
  post: {
    id: number
    title: string
    subtitle: string
    read: boolean
    likes: number
    removed: boolean
  }
  // Já que é uma função, void é usado onde não há dados para retornar valores, você poderá especificar void como tipo de retorno.
  // onRemove: () => void
  onRemove: any // tornei o tipo any para evitar o erro do (props.post.id), momentaneamente
  // theme: string
}

export default function Post(props: postInterface) {
  return (
    <article className={props.post.removed ? 'postDeleted' : 'post'}>
      <PostHeader
        // theme={props.theme}
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read
        }}
      />
      <Subtitle>{props.post.subtitle}</Subtitle>
      <Rate>Média de likes: {props.post.likes / 2}</Rate>
    </article>
  )
}
