import React, { useState } from 'react'
import hamburgerMenu from "../assets/icon-hamburger.svg"
import logo from "../assets/logo.svg"

const Header = () => {
    return (
        <header className='header-image h-80'>
            <div className='flex justify-between px-5 items-center py-4'>
                <img
                    src={logo}
                    alt="crowdfund-logo"
                />
                <img
                    src={hamburgerMenu}
                    alt="menu"
                />
            </div>
        </header>
    )
}

export default Header