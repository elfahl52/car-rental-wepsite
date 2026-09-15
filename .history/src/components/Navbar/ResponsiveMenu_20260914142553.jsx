import React from 'react'
import { FaUserCircle } from "react-icons/fa";

import { NavLinks } from "./Navbar";
function ResponsiveMenu({ showMenu }) {
  return (
    <div className={`${showMenu? 'left-0' :'-left-[100%]'} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-300 rounded-4xl shadow-md`}>
          <div className="card">
              <div className="flex items-center justify-between-gap-3">
                  <FaUserCircle size={50} />
                  <div>
                      <h1>Hello User</h1>
                      <h2 className='text-sm text-slate-50'>Premium user</h2>
                  </div>
              </div>
              <nav className="mt-12">
                  <ul className='space-y-4 text-xl'>
                      {NavLinks.map((data) => (
                          <li>
                              <a href={data.link} className='mb-5 inline-block'>{ data.name}</a>
                          </li>
                      ))}
                  </ul>
              </nav>
          </div>
          <div className="footer">
              <h5></h5>
          </div>
    </div>
  )
}

export default ResponsiveMenu
