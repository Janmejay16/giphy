import React from 'react'

const Loading = ({notFound}) => {
    return (
        <div className='status'>
            {notFound != undefined && notFound==true &&
                <div className='message'>
                    Oops, No results found!
                </div>
            }
            {notFound != undefined && notFound===false &&
                <div className='loading'>
                    Loading...
                </div>
            }
        </div>
    )
}

export default Loading