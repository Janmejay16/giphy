import React, { useContext, useState, useEffect } from 'react'
import Loading from './Loading'
import AppContext from './Context'
import '../styles/giphy.scss'
import ReactPaginate from 'react-paginate'

const Giphy = () => {
    
    const {offset, setoffset, count, setcount, gifs, keyword, loading, setloading} = useContext(AppContext)
    const [currentPage, setcurrentPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const PER_PAGE = 12;

    useEffect(() => {
        setoffset(currentPage * PER_PAGE);
    }, [currentPage])
    
    const func = () => {
        setcount(count+1)
    }
    
    const handlePageClick = ({ selected: selectedPage }) => {
        setcurrentPage(selectedPage);
    }
    
    useEffect(() => {
        if(gifs.length != 0) {
            setloading(2)
            setPageCount(Math.ceil(gifs.length/PER_PAGE))
        }
        else {
        setloading(0)
        }
    }, [gifs, count])
    
    return (
        <div className='giphy'>
            <main>
                {loading === 0 && <Loading notFound={false} />}
                {loading === 1 && <Loading notFound={true} />}
                {loading ===2 &&
                <div className='items'>
                    {gifs.map(gif => (
                        <div className='item' key={gif.id}>
                            <video
                                autoPlay muted loop playsInline
                                onLoadedData={func}
                                src={`${gif.images.preview.mp4}`}
                            />
                        </div>
                    ))}
                </div>}
            </main>
            
            <div className='pagination'></div>
        </div>
    )
}

export default Giphy