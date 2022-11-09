import { useState, createContext } from 'react'

interface ThemeInterface {
  children: React.ReactNode
  // theme: string
  // onToogleTheme: () => void
}

interface ThemeContextType {
  theme: string
  onToogleTheme: () => void
}
// Revisar depois
export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
)

// export const ThemeContext = createContext('dark')

export default function ThemeProvider(props: ThemeInterface) {
  const [theme, setTheme] = useState('dark')

  function handleToggleTheme() {
    setTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToogleTheme: handleToggleTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}
