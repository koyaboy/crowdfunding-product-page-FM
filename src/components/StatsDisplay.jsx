import React from 'react'

const StatsDisplay = ({ amount, backers, daysLeft }) => {
    return (
        <div className='flex flex-col bg-white px-3 mb-4 rounded-lg'>
            <div className='text-center py-5'>
                <div className='mb-4'>
                    <h2 className='text-2xl font-bold'>{amount}</h2>
                    <p className='text-dark-gray text-sm mb-4'>of $100,000 backed</p>
                    <hr className='w-1/5 ml-auto mr-auto text-dark-gray' />
                </div>
                <div className='mb-4'>
                    <h2 className='text-2xl font-bold'>{backers}</h2>
                    <p className='text-dark-gray text-sm mb-4'>total backers</p>
                    <hr className='w-1/5 ml-auto mr-auto text-dark-gray' />
                </div>
                <div className='mb-4'>
                    <h2 className='text-2xl font-bold'>{daysLeft}</h2>
                    <p className='text-dark-gray text-sm'>days left</p>
                </div>
                <div className="h-2 bg-dark-gray rounded-full overflow-hidden">
                    <div className='progress-bar'></div>
                </div>
            </div>
        </div>
    )
}

export default StatsDisplay