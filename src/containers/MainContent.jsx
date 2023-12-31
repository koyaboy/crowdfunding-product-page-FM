// bookmarks, desktop design


import React, { useState, useRef, useEffect } from 'react'

import StatsDisplay from '../components/StatsDisplay'
import RewardOption from '../components/RewardOption'
import SelectModal from '../components/SelectModal'
import ThankYouModal from '../components/ThankYouModal'
import StyledButton from '../components/StyledButton'

import logo from "../assets/logo-mastercraft.svg"

import { ReactComponent as CloseModalIcon } from "../assets/icon-close-modal.svg"
import { ReactComponent as BookmarkIcon } from "../assets/icon-bookmark.svg"


const MainContent = () => {
    const [amount, setAmount] = useState("89,914")
    const [backers, setBackers] = useState("5,007")
    const [bookmark, setBookmark] = useState(false)
    const [toggleModal, setToggleModal] = useState(false)
    const [selectedModal, setSelectedModal] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)
    const [pledge, setPledge] = useState("")

    const overlayRef = useRef(null)

    const toggleBookmark = () => {
        setBookmark((prevBookmark) => !prevBookmark)
    }

    const openModal = () => {
        setToggleModal(true)
        if (overlayRef) {
            overlayRef.current.classList.add("active")
        }
        window.scroll({ top: "0", behavior: "smooth" })
    }
    const closeModal = () => {
        setToggleModal(false)
        if (overlayRef) {
            overlayRef.current.classList.remove("active")
        }
    }

    const selectBambooStand = () => {
        setSelectedModal("Bamboo Stand")
        setToggleModal(true)
        if (overlayRef) {
            overlayRef.current.classList.add("active")
        }
        window.scroll({ top: "250", behavior: "smooth" })
    }

    const selectBlackEdition = () => {
        setSelectedModal("Black Edition Stand")
        setToggleModal(true)
        if (overlayRef) {
            overlayRef.current.classList.add("active")
        }
        window.scroll({ top: "500", behavior: "smooth" })
    }

    const SelectModalEnd = () => {
        setToggleModal(false)
        setIsCompleted(true)
        if (overlayRef) {
            overlayRef.current.classList.add("active")
        }
        setAmount((prevAmount) => {
            if (pledge > 0) {
                prevAmount = parseInt(prevAmount?.replace(/,/g, ""));
                const newAmount = prevAmount + parseInt(pledge);
                return newAmount.toLocaleString();
            } else {
                return prevAmount
            }
        })
        setBackers((prevBackers) => (parseInt(prevBackers.replace(/,/g, "")) + 1).toLocaleString())
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const CompleteModal = () => {
        setIsCompleted(false)
        setSelectedModal("")
        setPledge("")
        if (overlayRef) {
            overlayRef.current.classList.remove("active")
        }
    }

    return (
        <main className='flex flex-col items-center bg-opacity-10 bg-dark-gray'>

            <div className='w-11/12 relative -top-16 md:w-8/12'>

                <div className='text-center bg-white flex flex-col items-center mb-4 rounded-lg px-5 md:px-10'>
                    <img
                        src={logo}
                        alt="logo-mastercraft"
                        className='relative -top-6 '
                    />
                    <h2 className='text-2xl w-4/5 font-bold mb-4'>Mastercraft Bamboo Monitor Riser </h2>
                    <p className='mb-5 text-dark-gray'> A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                    <div className='flex items-center mb-8 justify-center gap-2 w-full md:justify-between md:gap-0'>
                        <StyledButton
                            content="Back this project"
                            onClick={openModal}
                        />
                        <div className='relative cursor-pointer flex items-center md:mr-28' onClick={toggleBookmark}>
                            {bookmark ? <BookmarkIcon className="selectBookmark" /> : <BookmarkIcon className="z-20" />}
                            <div className={` hidden absolute left-7 rounded-r-full pr-5 pl-9 bg-dark-gray bg-opacity-10 ${bookmark ? "text-dark-cyan" : "text-dark-gray"} font-bold h-full md:flex items-center`}>
                                {bookmark ? "Bookmarked" : "Bookmark"}
                            </div>
                        </div>

                    </div>
                </div>

                <StatsDisplay amount={amount} backers={backers} daysLeft={56} />


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

                    <RewardOption
                        title={"Bamboo Stand"}
                        pledge={25}
                        description={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list"}
                        leftAmount={101}
                        onSelect={selectBambooStand}
                        isActive={true}
                    />

                    <RewardOption
                        title={"Black Edition Stand"}
                        pledge={75}
                        description={"You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."}
                        leftAmount={64}
                        onSelect={selectBlackEdition}
                        isActive={true}
                    />

                    <RewardOption
                        title={"Mahogany Special Edition"}
                        pledge={200}
                        description={"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."}
                        leftAmount={0}
                        isActive={false}
                    />
                </div>

                {/* SELECT MODAL */}
                <div className='overlay-modal' ref={overlayRef}></div>

                {toggleModal &&
                    <div className='absolute bg-white rounded-md -top-20 px-4 py-6 z-40 md:px-8 py-8'>
                        <div className='flex justify-between items-center mb-6'>
                            <h2 className='font-bold text-lg'>Back this project</h2>

                            <CloseModalIcon className="close-modal-icon cursor-pointer" onClick={() => closeModal()} />
                        </div>
                        <p className='text-dark-gray mb-4'> Want to support us in bringing Mastercraft Bamboo
                            Monitor Riser out in the world?
                        </p>

                        <SelectModal
                            selectedModal={selectedModal}
                            Modal={"Pledge with no reward"}
                            description={"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."}
                            onModalChange={() => setSelectedModal("Pledge with no reward")}
                            name="selectedModal"
                            pledge={pledge}
                            pledgeAmount={0}
                            onSelect={SelectModalEnd}
                            onPledgeChange={(value) => setPledge(value)}
                        />

                        <SelectModal
                            selectedModal={selectedModal}
                            Modal={"Bamboo Stand"}
                            description={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."}
                            onModalChange={() => setSelectedModal("Bamboo Stand")}
                            name="selectedModal"
                            pledgeAmount={25}
                            pledge={pledge}
                            leftAmount={101}
                            onSelect={SelectModalEnd}
                            onPledgeChange={(value) => setPledge(value)}
                            isOutOfStock={false}
                        />

                        <SelectModal
                            selectedModal={selectedModal}
                            Modal={"Black Edition Stand"}
                            description={" You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
                            onModalChange={() => setSelectedModal("Black Edition Stand")}
                            name="selectedModal"
                            pledgeAmount={75}
                            pledge={pledge}
                            leftAmount={64}
                            onSelect={SelectModalEnd}
                            onPledgeChange={(value) => setPledge(value)}
                            isOutOfStock={false}
                        />

                        <SelectModal
                            selectedModal={selectedModal}
                            Modal={" Mahogany Special Edition"}
                            description={" You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
                            onModalChange={() => setSelectedModal("Mahogany Stand")}
                            name="selectedModal"
                            pledgeAmount={200}
                            pledge={pledge}
                            leftAmount={0}
                            onSelect={SelectModalEnd}
                            onPledgeChange={(value) => setPledge(value)}
                            isOutOfStock={true}
                        />

                    </div>

                }
                <div className='flex justify-center'>
                    {isCompleted && <ThankYouModal onClick={CompleteModal} />}
                </div>


            </div>

        </main >
    )
}

export default MainContent