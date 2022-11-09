import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

interface postButtonInterface {
  children: React.ReactNode
  onClick: any
  theme?: string
}

export default function Button(props: postButtonInterface) {
  // const theme = useContext(ThemeContext)
  const theme = 'dark'

  return (
    <>
      {/* <button onClick={() => props.onRemove(props.post.id)}>Remover</button> */}

      <button
        onClick={props.onClick}
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
          backgroundColor: theme === 'dark' ? '#000' : '#fff'
        }}
      >
        {props.children}
      </button>
    </>
  )
}
