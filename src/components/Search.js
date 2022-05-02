import React, { useContext, useEffect, useState } from 'react'
import '../styles/search.scss'
import image from '../images/search.png'
import AppContext from './Context'

const Search = () => {  

  const {keyword, setkeyword} = useContext(AppContext)

  const handleChange = (e) => {
    setkeyword(e.target.value)
  }

  const searchGiphy = (e) => {
    console.log(keyword)
  }

  useEffect(() => {
    if(keyword && keyword.length > 0) {
      searchGiphy()
    }
  }, [keyword])

  return (
    <div className='search'>
        <img src={image} />
        <input
            type="text"
            name="search"
            id="search"
            value={keyword}
            onChange={handleChange}
            placeholder="Article name or keywords..."
        />
        <button onClick={() => searchGiphy()}>Search</button>
    </div>
  )
}

export default Search