import React from 'react'
import Header from '../Components/Shared/Header'
import { Outlet } from 'react-router'
import Footer from '../Components/Shared/Footer'

const Root = () => {
  return (
    <div>
        <Header />
        <Outlet></Outlet>
        <Footer />
    </div>
  )
}

export default Root