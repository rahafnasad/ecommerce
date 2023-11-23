import React from 'react'
import Navbar from '../component/dashbord/Navbar.jsx'
import Footer from '../component/dashbord/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function LayoutDash() {
  return (
    <>
    <Navbar/>
    <Outlet/>

    <Footer/>
    </>  )
}
