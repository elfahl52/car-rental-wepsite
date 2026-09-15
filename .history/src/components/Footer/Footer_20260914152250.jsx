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
                <div className="grid md:grid-cols-3 py-5"></div>
            </section>

        </div>
    )
}

export default Footer
