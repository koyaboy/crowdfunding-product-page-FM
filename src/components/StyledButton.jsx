import React from 'react'

const StyledButton = ({ onClick, content }) => {
    return (
        <button
            className='bg-moderate-cyan rounded-3xl px-8 py-3 text-white hover:bg-dark-cyan'
            onClick={onClick}
        >
            {content}
        </button>
    )
}

export default StyledButton