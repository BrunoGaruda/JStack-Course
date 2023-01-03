import React, { useState, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/Layout'
import { GlobalStyle } from '../styles/global'
import themes from '../styles/themes/themes'

// import dark from '../styles/themes/dark'

function App() {
  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme() {
    setTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
    </ThemeProvider>
  )
}

export default App
