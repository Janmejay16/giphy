import React, { useContext, useEffect, useState } from 'react'
import '../styles/search.scss'
import image from '../images/search.png'
import AppContext from './Context'
import axios from 'axios'

const Search = () => {  

  const {offset, setoffset, count, setcount, gifs, setgifs, keyword, setkeyword, loading, setloading} = useContext(AppContext)
  const handleChange = (e) => {
    setcount(0)
    setgifs([])
    setkeyword(e.target.value)
  }

  const searchGiphy = (e) => {
    axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=12&offset=${offset}&q=${keyword}`
    )
    .then(res => {
      if(res.data.data.length == 0) {
        setloading(1)
      }
      else {
        setloading(0)
        setgifs(res.data.data)
      }
    })
  }

  const Next = () => {
    setoffset(offset+12)
  }
  
  const Previous = () => {
    if(offset > 12) {
      setoffset(offset-12)
    }
  }

  useEffect(() => {
    if(keyword && keyword.length > 0) {
      searchGiphy()
    }
    else {
      setcount(0)
      setgifs([])
    }
  }, [keyword])

  useEffect(() => {
    if(keyword && keyword.length > 0) {
      searchGiphy()
    }
  }, [offset])

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
        <ul className='pagination'>
          <li><button onClick={() => Previous()}>Previous</button></li>
          <li><button onClick={() => Next()}>Next</button></li>
        </ul>
    </div>
  )
}

export default Search