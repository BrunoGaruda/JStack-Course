import React from 'react'

import { Header } from '../Header'
import { PostList } from '../PostList'
import { Footer } from '../Footer'

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      <PostList />
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
    </>
  )
}
