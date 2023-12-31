import React, { useState, useRef } from 'react'
import hamburgerMenu from "../assets/icon-hamburger.svg"
import closeMenuIcon from "../assets/icon-close-menu.svg"
import logo from "../assets/logo.svg"

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const overlayRef = useRef(null)

    const openMenu = () => {
        setToggleMenu(true)
        if (overlayRef) {
            overlayRef.current.classList.add("active")
        }

    }
    const closeMenu = () => {
        setToggleMenu(false)
        overlayRef.current.classList.remove("active")
    }

    return (
        <>
            <div className='overlay-header' ref={overlayRef}></div>
            <header className={`${window.innerWidth >= "768px" ? "header-mobile-image" : "header-desktop-image"}  flex flex-col h-80  px-4 py-6 md:px-20 `}>
                <div className='flex justify-between items-center mb-11 z-20'>
                    <img
                        src={logo}
                        alt="crowdfund-logo"
                    />
                    {
                        toggleMenu ?
                            (
                                <img
                                    src={closeMenuIcon}
                                    alt="close-menu"
                                    onClick={() => closeMenu()}
                                    className='md:hidden'
                                />
                            ) :
                            (
                                <>
                                    <img
                                        src={hamburgerMenu}
                                        alt="hamburger-menu"
                                        onClick={() => openMenu()}
                                        className='md:hidden'
                                    />


                                </>
                            )
                    }

                    <nav className="hidden md:block">
                        <ul className='flex gap-8 text-white'>
                            <li>
                                <a href="/" className='font-medium text-base'>About</a>
                            </li>
                            <li>
                                <a href="/" className='font-medium text-base'>Discover</a>
                            </li>
                            <li>
                                <a href="/" className='font-medium text-base'>Get Started</a>
                            </li>
                        </ul>
                    </nav>

                </div>

                {toggleMenu &&
                    <nav className='bg-white rounded-lg z-20'>
                        <ul>
                            <li className='flex flex-col py'>
                                <a href="/" className='px-4 font-medium my-4 text-lg py-2'>About</a>
                                <hr className='opacity-10' />
                            </li>
                            <li className='flex flex-col py-2'>
                                <a href="/" className='px-4 font-medium my-4 text-lg'>Discover</a>
                                <hr className='opacity-10' />
                            </li>
                            <li className='flex flex-col'>
                                <a href="/" className='px-4 font-medium my-4 text-lg py-2'>Get Started</a>
                            </li>
                        </ul>
                    </nav>

                }


            </header >
        </>
    )
}

export default Header