import React from 'react'
import StyledButton from './StyledButton'

const RewardOption = ({ title, pledge, description, leftAmount, onSelect, isActive }) => {
    return (
        <>
            {isActive ?
                (
                    <div className='border-solid border border-opacity-50 border-dark-gray p-5 rounded-lg mb-6'>
                        <div className='md:flex justify-between'>
                            <h3 className='font-bold mb-0.5'> {title}</h3>
                            <h3 className='text-moderate-cyan mb-6'>Pledge ${pledge} or more</h3>
                        </div>

                        <p className='text-dark-gray mb-6'> {description} </p>
                        <div className='md: flex justify-between items-center'>
                            <p className='flex gap-2 items-center mb-6 md:mb-0'><span className='text-3xl font-bold'>{leftAmount}</span><span className='text-dark-gray'> left</span></p>
                            <StyledButton
                                content="Select Reward"
                                onClick={onSelect}
                            />
                        </div>

                    </div>
                ) :
                (
                    <div className='border-solid border border-opacity-50 border-dark-gray p-5 rounded-lg mb-6 opacity-50'>
                        <h3 className='font-bold mb-0.5'> {title}</h3>
                        <h3 className='text-moderate-cyan mb-6'>Pledge ${pledge} or more</h3>
                        <p className='text-dark-gray mb-6'>  {description}</p>
                        <div className='md: flex justify-between items-center'>
                            <p className='flex gap-2 items-center mb-6 md:mb-0'><span className='text-3xl font-bold'>{leftAmount}</span><span className='text-dark-gray'> left</span></p>
                            <button className='bg-dark-gray rounded-3xl px-8 py-3 text-white'> Out of Stock</button>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default RewardOption