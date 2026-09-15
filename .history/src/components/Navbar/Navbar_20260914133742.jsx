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
                        <ul className='flex items-center gap-7'>
                            {
                                NavLinks.map(({ id, name, link }) =>
                                    <li key={id} className='py-4'>
                                        <a href={link} className='text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transation-colors duration-500'>{name }</a>
                                    </li>                     
                                )
                            }
                            {theme === 'dark' ? (
                                  <BiSolidSun onClick={()=>setTheme('dark')} className='text-2xl'/>
                            ) : (
                                <BiSolidMoon onClick={()=>setTheme('dark')} className='text-2xl' />
                            )}
                        </ul>
                    </nav>
                    {/* Mobile View */}
                    <div className="flex items-center gap-4 md:hidden">
                        {/* dark mode */}
                        {theme === 'dark' ? (
                            <BiSolidSun onClick={()=> setTheme('light')} className='text-2xl' />
                        ) : (
                                <B
                        )}
                    </div>

                </div>
                
          </div>
        </div>
    )
}

export default Navbar
