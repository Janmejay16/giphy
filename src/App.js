import React, { useState, useContext, useEffect } from 'react'
import Search from './components/Search'
import './styles/main.scss'
import AppContext from './components/Context'
import Giphy from './components/Giphy'

const App = () => {

  const [keyword, setkeyword] = useState("")
  const [gifs, setgifs] = useState("")
  const [loading, setloading] = useState(0)
  const [count, setcount] = useState(0)
  const [offset, setoffset] = useState(0)

  return (
    <AppContext.Provider value={{offset, setoffset, count, setcount, keyword, setkeyword, gifs, setgifs, loading, setloading}}>
      <div className='App'>
        <Search/>
        <Giphy />
      </div>
    </AppContext.Provider>
  )
}

export default App