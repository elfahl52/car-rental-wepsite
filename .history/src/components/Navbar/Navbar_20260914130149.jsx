import React, { useState } from 'react'

import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
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
                <div className="flex justify-between items-center">
                    <div>
                        <span className='text-3xl font-bold font-serif'>Car Rental</span>
                    </div>
                    <nav className="hidden md:block">
                        <ul className=''></ul>
                    </nav>

                </div>
                
          </div>
        </div>
    )
}

export default Navbar
