import React , {useContext} from 'react'
import AppContext from './Context'

const Loading = ({notFound}) => {
    const {keyword} = useContext(AppContext)
    return (
        <div className='status'>
            {notFound != undefined && notFound==true &&
                <div className='message'>
                    Oops, No results found!
                </div>
            }
            {notFound != undefined && notFound===false && keyword.length>0 &&
                <div className='loading'>
                    Loading...
                </div>
            }
            
            {notFound != undefined && notFound===false && keyword.length==0 &&
                <div className='loading'>
                    Search for GIFs!!
                </div>
            }
        </div>
    )
}

export default Loading