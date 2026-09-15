import React from 'react'
import { FaUserCircle } from "react-icons/fa";

import { NavLinks } from "./Navbar";
function ResponsiveMenu({ showMenu }) {
  return (
    <div className={`${showMenu? 'left-0' :'-left-[100%]'} fixed `}>
      
    </div>
  )
}

export default ResponsiveMenu
