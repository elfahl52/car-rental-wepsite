import { useState } from "react";

import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { NavLinks } from "./navLinks";
import ResponsiveMenu from "./ResponsiveMenu";

function Navbar({ theme, setTheme }) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="relative z-10 w-full shadow-md duration-300 bg-white dark:bg-black dark:text-white">
            <div className="container mx-auto py-2 md:py-0">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div>
                        <span className="text-3xl font-bold font-serif">
                            Car Rental
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-7">
                            {NavLinks.map(({ id, name, link }) => (
                                <li key={id} className="py-4">
                                    <a
                                        href={link}
                                        className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}

                            {/* Dark Mode */}
                            {theme === "dark" ? (
                                <BiSolidSun
                                    onClick={() => setTheme("light")}
                                    className="text-2xl cursor-pointer"
                                />
                            ) : (
                                <BiSolidMoon
                                    onClick={() => setTheme("dark")}
                                    className="text-2xl cursor-pointer"
                                />
                            )}
                        </ul>
                    </nav>

                    {/* Mobile View */}
                    <div className="flex items-center gap-4 md:hidden">

                        {/* Dark Mode */}
                        {theme === "dark" ? (
                            <BiSolidSun
                                onClick={() => setTheme("light")}
                                className="text-2xl cursor-pointer"
                            />
                        ) : (
                            <BiSolidMoon
                                onClick={() => setTheme("dark")}
                                className="text-2xl cursor-pointer"
                            />
                        )}

                        {/* Hamburger */}
                        {showMenu ? (
                            <HiMenuAlt1
                                onClick={toggleMenu}
                                className="cursor-pointer transition-all size-7"
                            />
                        ) : (
                            <HiMenuAlt3
                                onClick={toggleMenu}
                                className="cursor-pointer transition-all size-7"
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Responsive Menu */}
            <ResponsiveMenu showMenu={showMenu} />
        </div>
    );
}

export default Navbar;