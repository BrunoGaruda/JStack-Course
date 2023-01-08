import PostHeader from '../Post/PostHeader'
import '../Post'

import { Container, Rate, Subtitle } from './styles'

interface postInterface {
  // post é um objeto, portanto, é necessario tipar sendo um objeto na interface
  post: {
    id: number
    title: string
    subtitle: string
    read: boolean
    likes: number
    removed: boolean
    children?: React.ReactNode
  }
  // Já que é uma função, void é usado onde não há dados para retornar valores, você poderá especificar void como tipo de retorno.
  // onRemove: () => void
  onRemove: any // tornei o tipo any para evitar o erro do (props.post.id), momentaneamente
  // theme: string
}

export default function Post({ post: { id, title, subtitle, read, likes, removed }, onRemove }: postInterface) {
  return (
    <Container >
      <PostHeader
        // theme={props.theme}
        onRemove={onRemove}
        post={{
          id: id,
          title: title,
          read: read
        }}
      />
      <Subtitle>{subtitle}</Subtitle>
      <Rate>Média de likes: {likes / 2}</Rate>
    </Container>
  )
}
