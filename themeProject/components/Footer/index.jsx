import React from 'react'
import { Container } from './styles'

export function Footer({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <span>Bruno's Block. Todos os direitos reservados</span>
      <button type="button" onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌚' : '🌞'}
      </button>
    </Container>
  )
}
