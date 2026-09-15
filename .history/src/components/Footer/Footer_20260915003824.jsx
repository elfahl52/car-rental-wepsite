import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Contact",
        link: "/contact",
    },
    {
        title: "Blog",
        link: "/blog",
    },
];

function Footer() {
    return (
        <div className="bg-gray-100 dark:bg-gray-950 mt-14 rounded-t-3xl">
            <section className="container">
                <div className="grid md:grid-cols-3 py-5">

                    {/* Company Details */}
                    <div className="py-8 px-5">
                        <h1 className="sm:text-3xl text-xl font-bold mb-3 flex items-center gap-3 font-serif">
                            Car Rental
                        </h1>

                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Possimus, voluptate.
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-3 mt-5">
                            <FaLocationArrow />
                            <p>Noida, Uttar Pradesh</p>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3 mt-3">
                            <FaMobileAlt />
                            <p>+91 123456789</p>
                        </div>

                        {/* Social Handle */}
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className="text-3xl hover:text-primary duration-300" />
                            </a>

                            <a href="#">
                                <FaFacebook className="text-3xl hover:text-primary duration-300" />
                            </a>

                            <a href="#">
                                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-9">

                        {/* Important Links */}
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">
                                Important Links
                            </h1>

                            <ul className="flex flex-col gap-3">
                                {FooterLinks.map((link) => (
                                    <li
                                        key={link.title}
                                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500 dark:text-gray-200"
                                    >
                                        <Link to={link.link}>
                                            <span className="mr-2">&#11162;</span>
                                            <span>{link.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Links */}
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">
                                Links
                            </h1>

                            <ul className="flex flex-col gap-3">
                                {FooterLinks.map((link) => (
                                    <li
                                        key={link.title}
                                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500 dark:text-gray-200"
                                    >
                                        <Link to={link.link}>
                                            <span className="mr-2">&#11162;</span>
                                            <span>{link.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Location */}
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold mb-3">
                                Location
                            </h1>

                            <ul className="flex flex-col gap-3">
                                {FooterLinks.map((link) => (
                                    <li
                                        key={link.title}
                                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500 dark:text-gray-200"
                                    >
                                        <span className="mr-2">&#11162;</span>
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;