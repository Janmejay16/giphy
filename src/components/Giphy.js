import React, { useContext, useState } from 'react'
import Loading from './Loading'
import AppContext from './Context'
import axios from 'axios'

const Giphy = () => {
    const {keyword} = useContext(AppContext)
    const [loading, setloading] = useState(0)

    return (
        <div className='giphy'>
            <main>
                {loading === 0 && <Loading notFound={false} />}
                {loading === 1 && <Loading notFound={true} />}
            </main>
            
            <div className='pagination'></div>
        </div>
    )
}

export default Giphy