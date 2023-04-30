import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'
import '../styles/Layout.css'


export default function Layout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
