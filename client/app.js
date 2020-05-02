import React from 'react'
import Nav from './components/Nav'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Nav />
      {/* <Navbar /> */}
      <div id="spacer" />
      <Routes />
    </div>
  )
}

export default App
