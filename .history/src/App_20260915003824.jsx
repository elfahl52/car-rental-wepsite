import { useEffect, useState } from 'react'
import AOS from 'aos'
import { Route, Routes } from 'react-router-dom'

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
import Booking from './components/Booking/Booking'

function HomePage({ theme }) {
  return (
    <>
      <Hero theme={theme} />
      <About />
      <Services />
      <Experience />
      <CartList />
      <AppStoreBanner />
      <Testimonial />
      <Footer />
    </>
  )
}

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
        <Routes>
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<HomePage theme={theme} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
