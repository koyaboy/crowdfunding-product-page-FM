import React from 'react'

const StatsDisplay = ({ amount, backers, daysLeft }) => {
    let percentageAchieved = (parseInt(amount?.replace(/,/g, "")) / 100000) * 100
    return (
        <div className='flex flex-col bg-white px-3 mb-4 rounded-lg'>
            <div className='text-center py-5 md:flex flex-row gap-10 '>
                <div className='mb-4 md:mb-0 mr-3'>
                    <h2 className='text-2xl font-bold'>${amount}</h2>
                    <p className='text-dark-gray text-sm mb-4 relative md:left-5'>of $100,000 backed</p>
                </div>
                <hr className='w-1/5 ml-auto mr-auto text-dark-gray opacity-40 md:hidden' />

                <div className='hidden vertical-line border-l-2 h-14 border-dark-gray border-opacity-20 md:block  '></div>



                <div className='mb-4 md:mb-0 mr-8'>
                    <h2 className='text-2xl font-bold mt-2 md:mt-0'>{backers}</h2>
                    <p className='text-dark-gray text-sm mb-4 relative md:left-2.5'>total backers</p>
                </div>

                <hr className='w-1/5 ml-auto mr-auto text-dark-gray opacity-40 md:hidden' />
                <div className='hidden vertical-line border-l-2 border-dark-gray border-opacity-20 md:block h-14'></div>

                <div className='mb-4 md:mb-0 '>
                    <h2 className='text-2xl font-bold mt-2 md:mt-0'>{daysLeft}</h2>
                    <p className='text-dark-gray text-sm relative md:left-2.5'>days left</p>
                </div>
            </div>
            <div className="h-2 bg-dark-gray rounded-full overflow-hidden mb-5">
                <div className='progress-bar' style={{ width: `${percentageAchieved}%` }}></div>
            </div>
        </div >
    )
}

export default StatsDisplay