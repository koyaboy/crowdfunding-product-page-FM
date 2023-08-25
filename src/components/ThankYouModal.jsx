import React from 'react'

import StyledButton from './StyledButton'
import iconCheck from "../assets/icon-check.svg"

const ThankYouModal = ({ onClick }) => {
    return (
        <div className='bg-white flex flex-col items-center px-4 py-8 rounded-xl absolute top-40 z-50 w-11/12'>
            <img
                src={iconCheck}
                alt="icon-check"
                className='mb-6'
            />
            <div className='font-bold text-xl mb-6'>Thanks for your support!</div>
            <p className='mb-6 text-center text-dark-gray'>  Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.
            </p>
            <StyledButton
                content="Got it !"
                onClick={onClick}
            />
        </div>
    )
}

export default ThankYouModal