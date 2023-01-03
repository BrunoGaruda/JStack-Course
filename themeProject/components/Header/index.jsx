import React from 'react'
import { Container } from './styles'

export function Header({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <h1>Bruno'Stack Blog</h1>
      <button type="button" onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌚' : '🌞'}
      </button>
    </Container>
  )
}
