import React from 'react'
import Navbar from './components/navbar'
import Mainimage from './components/main'
import Card from './components/cards'
import Video from './components/videocard'
import Email from './components/email'


const App = () => {
  return (
  <>
     <Navbar/>
      <Mainimage/>
      <Card/>
      <Video/>
      <Email/>
  </>
  )
}

export default App
