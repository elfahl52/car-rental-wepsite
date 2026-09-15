import { useState } from 'react'
 
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ResponsiveMenu from './components/Navbar/ResponsiveMenu'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

function App() {
 

  return (
    <>
      <Navbar />
      <ResponsiveMenu />
      <Hero />
      <About/>
    </>
  )
}

export default App
