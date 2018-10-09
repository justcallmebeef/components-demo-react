import React from 'react'

const Image = (props) => {
    return (
        <img 
            style={{width: props.size + 'px'}}
            src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCjPi83szHg3qP3puB4t7HtqmQsp8z-WexH7pNgEva79p-2knXw'
            alt = 'bumblebee' />
    )
}

export default Image