import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}
