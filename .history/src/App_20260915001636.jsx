import { useEffect, useState } from 'react'
import AOS from 'aos'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Experience from './components/Experience/Experience'
import CartList from './components/CartList/CartList'
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero theme={theme} />
        <About />
        <Services />
        <Experience />
        <CartList />
        <AppStoreBanner />
        <Testimonial />
        <Footer />
      </div>
    </div>
  )
}

export default App
