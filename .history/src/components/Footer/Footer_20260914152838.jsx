import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
    {
        tiltle: "Home",
        link: '/'
    },
    {
        tiltle: "About",
        link: '/about'
    },
    {
        tiltle: "Contact",
        link: '/contact'
    },
    {
        tiltle: "Blog",
        link: '/blog'
    },
]
function Footer() {
    return (
        <div className='bg-gray-100 dark:bg-gray-950 mt-14 rounded-t-3xl'>
            <section className="container">
                <div className="grid md:grid-cols-3 py-5">
                    {/* company Details */}
                    <div className="py-8 px-5">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
                            Car Rental
                        </h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Possimus, voluptate.{" "}
                        </p>
                        <br />
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Noida, Uttar Pradesh</p>
                        </div>
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
                    {/* links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span"></div>
                </div>
            </section>

        </div>
    )
}

export default Footer
