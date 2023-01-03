import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    font-family: sans-serif;
  }
`
