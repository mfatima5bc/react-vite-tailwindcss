
import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Dropdown from './components/Dropdown'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { AppRoutes } from './Routes'


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })
  
  return (
    <>
      <Navbar toggle={toggle} /> 
      <Dropdown isOpen={isOpen} toggle={toggle} />     
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
