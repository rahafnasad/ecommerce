import React from 'react'
import Navbar from '.././component/user/navbar/Navbar.jsx'
import Footer from '.././component/user/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function LayoutUser() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
