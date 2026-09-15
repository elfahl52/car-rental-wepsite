import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import { NavLinks } from "./navLinks";

function ResponsiveMenu({ showMenu }) {
    return (
        <div
            className={`${
                showMenu ? "left-0" : "-left-[100%]"
            } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black shadow-md transition-all duration-300 dark:bg-gray-900 dark:text-white`}
        >
            {/* User */}
            <div>
                <div className="flex items-center justify-between gap-3">
                    <FaUserCircle size={50} />

                    <div>
                        <h1 className="font-semibold">Hello User</h1>
                        <h2 className="text-sm text-slate-500 dark:text-slate-400">
                            Premium User
                        </h2>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="mt-12">
                    <ul className="space-y-4 text-xl">
                        {NavLinks.map((data) => (
                            <li key={data.id}>
                                <Link
                                    to={data.link}
                                    className="mb-5 inline-block hover:text-primary transition-colors duration-300"
                                >
                                    {data.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Footer */}
            <div>
                <h5 className="text-sm text-slate-500 dark:text-slate-400">
                    Made with ❤️ by Khaled Elfahl
                </h5>
            </div>
        </div>
    );
}

export default ResponsiveMenu;