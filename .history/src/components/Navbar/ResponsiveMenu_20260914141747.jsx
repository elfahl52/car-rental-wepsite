import React from 'react'
import { FaUserCircle } from "react-icons/fa";

import { NavLinks } from "./Navbar";
function ResponsiveMenu({ showMenu }) {
  return (
    <div className={`${showMenu? 'left-0' :'-left-[100%]'} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-column `}>
      
    </div>
  )
}

export default ResponsiveMenu
