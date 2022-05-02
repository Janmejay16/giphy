import React, { useState, useContext } from 'react'
import Search from './components/Search'
import './styles/main.scss'
import AppContext from './components/Context'
import Giphy from './components/Giphy'

const App = () => {

  const [keyword, setkeyword] = useState("")

  return (
    <AppContext.Provider value={{keyword, setkeyword}}>
      <div className='App'>
        <Search/>
        <Giphy />
      </div>
    </AppContext.Provider>
  )
}

export default App