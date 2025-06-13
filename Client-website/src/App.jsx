import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <div className='bg-[#f5f2eb]'>
    <Navbar/>
    <Outlet/>
    <Footer />
    </div>
    </>
  )
} 

export default App
