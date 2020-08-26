import React, { useState } from 'react'
import { MButton } from './components'
import { Home } from './pages/home'

const App: React.FC = () => {
  const location = window.location.pathname
  const [url, setUrl] = useState(location)

  switch (url) {
    case '/':
      return (
        <div className="app">
          <Home />
        </div>
      )
    default:
      return <div className="app"></div>
  }
}

export default App
