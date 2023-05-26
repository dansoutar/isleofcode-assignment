import { useState } from 'react'

import { Grid } from './components/Grid'
import { Header } from './components/Header'

import './App.css'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const INITIAL_LAYOUT = [
  { i: 'a', x: 0, y: 0, w: 1, h: 2 },
  { i: 'b', x: 1, y: 0, w: 3, h: 2 },
  { i: 'c', x: 4, y: 0, w: 1, h: 2 }
]

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [layout, setLayout] = useState(INITIAL_LAYOUT)

  const handleLogin = () => {
    const userName = prompt('Please enter your name:')

    if (!userName) {
      alert('Please enter a username to login')
      return
    }

    setLoggedInUser(userName)
  }

  const handleLogout = () => {
    setLoggedInUser(null)
    location.reload()
  }

  const handleLoadLayout = () => {
    const savedState = localStorage.getItem(loggedInUser)
    if (savedState) {
      setLayout(JSON.parse(savedState))
    }
  }

  const handleSaveLayout = () => {
    localStorage.setItem(loggedInUser, JSON.stringify(layout))
  }

  return (
    <main>
      <Header
        onLogin={handleLogin}
        onLogout={handleLogout}
        onLoadLayout={handleLoadLayout}
        onSaveLayout={handleSaveLayout}
        {...{ loggedInUser }}
      />
      <Grid {...{ layout, setLayout }} />
    </main>
  )
}

export default App
