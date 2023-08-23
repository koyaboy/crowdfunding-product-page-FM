import React from 'react'
import hamburgerMenu from "../assets/icon-hamburger.svg"

const Header = () => {
    return (
        <header className='header-image h-80 bg-red-500'>
            <div className='flex justify-between px-4 items-center'>
                <h2 className='text-white text-lg font-bold'>crowdfund</h2>
                <img
                    src={hamburgerMenu}
                    alt="menu"
                />
            </div>
        </header>
    )
}

export default Header