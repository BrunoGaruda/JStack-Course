import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

interface postButtonInterface {
  children: React.ReactNode
  onClick: any
  // theme?: string
}

export default function Button(props: postButtonInterface) {
  // const theme = useContext(ThemeContext)
  // const theme = useContext('dark') 
  const theme = 'dark'

  return (
    <>
      <button
        onClick={() => props.onClick}
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
