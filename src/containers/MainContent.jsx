import React, { useState, useRef } from 'react'

import logo from "../assets/logo-mastercraft.svg"
import bookmark from "../assets/icon-bookmark.svg"
import closeModalIcon from "../assets/icon-close-modal.svg"
import iconCheck from "../assets/icon-check.svg"

const MainContent = () => {
    const [toggleModal, setToggleModal] = useState(false)
    const [selectedModal, setSelectedModal] = useState("")
    const overlayRef = useRef(null)

    const openModal = () => {
        setToggleModal(true)
        if (overlayRef) {
            overlayRef.current.classList.add("active")
        }
    }
    const closeModal = () => {
        setToggleModal(false)
        if (overlayRef) {
            overlayRef.current.classList.remove("active")
        }
    }

    const selectBlackEdition = () => {
        setSelectedModal("Black Edition Stand")
        setToggleModal(true)
        if (overlayRef) {
            overlayRef.current.classList.add("active")
        }
    }

    const selectBambooStand = () => {
        setSelectedModal("Bamboo Stand")
        setToggleModal(true)
        if (overlayRef) {
            overlayRef.current.classList.add("active")
        }
    }

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
                        <button
                            className='bg-moderate-cyan rounded-3xl px-10 py-3 text-white'
                            onClick={() => openModal()}
                        >
                            Back this project
                        </button>
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
                        <button
                            className='bg-moderate-cyan rounded-3xl px-8 py-3 text-white'
                            onClick={() => selectBambooStand()}
                        >
                            Select Reward
                        </button>

                    </div>

                    <div className='border-solid border border-opacity-50 border-dark-gray p-5 rounded-lg mb-6'>
                        <h3 className='font-bold mb-0.5'> Black Edition Stand</h3>
                        <h3 className='text-moderate-cyan mb-6'>Pledge $75 or more</h3>
                        <p className='text-dark-gray mb-6'>  You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                            member list. Shipping is included.
                        </p>
                        <p className='flex gap-2 items-center mb-6'><span className='text-3xl font-bold'>64</span><span className='text-dark-gray'> left</span></p>
                        <button
                            className='bg-moderate-cyan rounded-3xl px-8 py-3 text-white'
                            onClick={() => selectBlackEdition()}
                        >
                            Select Reward
                        </button>

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

            {/* SELECTED MODAL */}
            <div className='overlay-modal' ref={overlayRef}></div>
            {
                toggleModal &&

                <div className='absolute bg-white rounded-md top-20 w-11/12 px-4 py-6 z-40'>
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='font-bold text-lg'>Back this project</h2>
                        <img
                            src={closeModalIcon}
                            alt="close-menu-icon"
                            onClick={() => closeModal()} />
                    </div>
                    <p className='text-dark-gray mb-4'> Want to support us in bringing Mastercraft Bamboo
                        Monitor Riser out in the world?
                    </p>

                    <div className='px-5 py-8 border border-dark-gray border-opacity-50 rounded-lg mb-4'>
                        <div className='flex gap-5 items-center mb-8'>
                            {/* <div className='w-6 h-6 rounded-full border border-dark-gray border-opacity-50'></div> */}
                            <input
                                type="radio"
                                name="selectedModal"
                                value="Pledge with no reward"
                                checked={selectedModal === "Pledge with no reward"}
                                onChange={() => setSelectedModal("Pledge with no reward")}
                            />
                            <h3 className='font-bold text-sm'>Pledge with no reward</h3>
                        </div>
                        <p className='text-dark-gray w-11/12'> Choose to support us without a reward if you simply believe in our project. As a backer,
                            you will be signed up to receive product updates via email.
                        </p>
                    </div>

                    <div className='border-solid border border-opacity-50 border-dark-gray p-5 rounded-lg mb-6'>
                        <div className='flex gap-5 items-center mb-8'>
                            {/* <div className='w-6 h-6 rounded-full border border-dark-gray border-opacity-50'></div>
                             */}
                            <input
                                type="radio"
                                name="selectedModal"
                                value="Bamboo Stand"
                                checked={selectedModal === "Bamboo Stand"}
                                onChange={() => setSelectedModal("Bamboo Stand")}
                            />
                            <div>
                                <h3 className='font-bold'> Bamboo Stand</h3>
                                <h3 className='text-moderate-cyan'>Pledge $25 or more</h3>
                            </div>
                        </div>

                        <p className='text-dark-gray mb-6'> You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                            you'll be added to a special Backer member list
                        </p>
                        <p className='flex gap-2 items-center mb-2'><span className='text-3xl font-bold'>101</span><span className='text-dark-gray'> left</span></p>
                    </div>

                    <div className='border-solid border border-opacity-50 border-dark-gray p-5 rounded-lg mb-6'>
                        <div className='flex gap-5 items-center mb-8'>
                            {/* <div className='w-6 h-6 rounded-full border border-dark-gray border-opacity-50'></div> */}
                            <input
                                type="radio"
                                name="selectedModal"
                                value="Black Edition Stand"
                                checked={selectedModal === "Black Edition Stand"}
                                onChange={() => setSelectedModal("Black Edition Stand")}
                            />
                            <div>
                                <h3 className='font-bold'>  Black Edition Stand</h3>
                                <h3 className='text-moderate-cyan'>Pledge $75 or more</h3>
                            </div>
                        </div>

                        <p className='text-dark-gray mb-6'>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                            member list. Shipping is included.
                        </p>
                        <p className='flex gap-2 items-center mb-2'><span className='text-3xl font-bold'>64</span><span className='text-dark-gray'> left</span></p>
                    </div>

                    <div className='border-solid border border-opacity-50 border-dark-gray p-5 rounded-lg mb-6 opacity-50'>
                        <div className='flex gap-5 items-center mb-8'>
                            <div className='w-6 h-6 rounded-full border border-dark-gray border-opacity-50'></div>
                            <div>
                                <h3 className='font-bold'>  Mahogany Special Edition</h3>
                                <h3 className='text-moderate-cyan'>Pledge $200 or more</h3>
                            </div>
                        </div>

                        <p className='text-dark-gray mb-6'>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                            to our Backer member list. Shipping is included.
                        </p>
                        <p className='flex gap-2 items-center mb-2'><span className='text-3xl font-bold'>0</span><span className='text-dark-gray'> left</span></p>
                    </div>

                </div>
            }





        </main >
    )
}

export default MainContent