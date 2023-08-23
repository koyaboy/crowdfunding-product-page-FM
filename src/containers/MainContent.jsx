import React from 'react'

import logo from "../assets/logo-mastercraft.svg"
import bookmark from "../assets/icon-bookmark.svg"

const MainContent = () => {
    return (
        <main className='flex flex-col items-center bg-opacity-10 bg-dark-gray'>

            <div className='w-11/12  relative -top-16' >

                <div className='text-center bg-white flex flex-col items-center mb-4 rounded-lg'>
                    <img
                        src={logo}
                        alt="logo-mastercraft"
                        className='relative -top-6 '
                    />
                    <h2 className='text-2xl w-4/5 font-bold mb-4'>Mastercraft Bamboo Monitor Riser </h2>
                    <p className='mb-3 text-dark-gray'>
                        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                    </p>
                    <div className='flex items-center gap-2 mb-8'>
                        <button className='bg-moderate-cyan rounded-3xl px-10 py-3 text-white'>  Back this project</button>
                        <button>
                            <img
                                src={bookmark}
                                alt="bookmark" />
                        </button>
                    </div>
                </div>

                <div className='flex flex-col bg-white px-3 mb-4 rounded-lg'>
                    <div className='text-center py-5'>
                        <div className='mb-4'>
                            <h2 className='text-2xl font-bold'>$89,914 </h2>
                            <p className='text-dark-gray text-sm mb-4'>of $100,000 backed</p>
                            <hr className='w-1/5 ml-auto mr-auto text-dark-gray' />
                        </div>
                        <div className='mb-4'>
                            <h2 className='text-2xl font-bold'>5,007</h2>
                            <p className='text-dark-gray text-sm mb-4'>total backers</p>
                            <hr className='w-1/5 ml-auto mr-auto text-dark-gray' />
                        </div>
                        <div className='mb-4'>
                            <h2 className='text-2xl font-bold'>56</h2>
                            <p className='text-dark-gray text-sm'>days left</p>
                        </div>
                        <div className="h-2 bg-dark-gray rounded-full overflow-hidden">
                            <div className='progress-bar'></div>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-6 rounded-lg'>
                    <h2 className='font-bold text-xl mb-4'>About this project</h2>
                    <p className='mb-4 text-dark-gray'>
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                    </p>
                    <p className='mb-4 text-dark-gray'>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                        to allow notepads, pens, and USB sticks to be stored under the stand.
                    </p>

                    <div className='border-solid border border-opacity-50 border-dark-gray p-5 rounded-lg mb-6'>
                        <h3 className='font-bold mb-0.5'> Bamboo Stand</h3>
                        <h3 className='text-moderate-cyan mb-6'>Pledge $25 or more</h3>
                        <p className='text-dark-gray mb-6'> You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                            you'll be added to a special Backer member list
                        </p>
                        <p className='flex gap-2 items-center mb-6'><span className='text-3xl font-bold'>101</span><span className='text-dark-gray'> left</span></p>
                        <button className='bg-moderate-cyan rounded-3xl px-8 py-3 text-white'>Select Reward</button>

                    </div>

                    <div className='border-solid border border-opacity-50 border-dark-gray p-5 rounded-lg mb-6'>
                        <h3 className='font-bold mb-0.5'> Black Edition Stand</h3>
                        <h3 className='text-moderate-cyan mb-6'>Pledge $75 or more</h3>
                        <p className='text-dark-gray mb-6'>  You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                            member list. Shipping is included.
                        </p>
                        <p className='flex gap-2 items-center mb-6'><span className='text-3xl font-bold'>64</span><span className='text-dark-gray'> left</span></p>
                        <button className='bg-moderate-cyan rounded-3xl px-8 py-3 text-white'>Select Reward</button>

                    </div>

                    <div className='border-solid border border-opacity-50 border-dark-gray p-5 rounded-lg mb-6 opacity-50'>
                        <h3 className='font-bold mb-0.5'> Mahogany Special Edition</h3>
                        <h3 className='text-moderate-cyan mb-6'>Pledge $200 or more</h3>
                        <p className='text-dark-gray mb-6'>  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                            to our Backer member list. Shipping is included.
                        </p>
                        <p className='flex gap-2 items-center mb-6'><span className='text-3xl font-bold'>0</span><span className='text-dark-gray'> left</span></p>
                        <button className='bg-dark-gray rounded-3xl px-8 py-3 text-white'>  Out of Stock</button>

                    </div>
                </div>

            </div>


        </main >
    )
}

export default MainContent