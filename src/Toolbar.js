import React from 'react'

const Toolbar = (props) => {
    return (
        <>
        <button onClick={props.makeBigger}> + </button>
        <button onClick={props.makeSmaller}> - </button>
        </>
    )
}

export default Toolbar
