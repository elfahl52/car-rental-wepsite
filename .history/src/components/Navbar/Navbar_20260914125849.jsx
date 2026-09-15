import React, { useState } from 'react'

const NavLinks = [
    {
        id: 1,
        name: 'HOME',
        link: '/'
    },
    {
        id: 2,
        name: 'CARS',
        link: '/cars'
    },
    {
        id: 3,
        name: 'About',
        link: '/about'
    },
    {
        id: 4,
        name: 'BOKKING',
        link: '/bokking'
    },
]
function Navbar({ theme, setTheme }) {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <div className='relative z-10 shadow-md w-full dark:bg-balck dark:text:white duration-300'>
            <div className="container py-2 md:py-0">
                <div className="flex justify-between items-cw"></div>
                
          </div>
        </div>
    )
}

export default Navbar
