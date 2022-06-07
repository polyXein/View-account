import React from 'react'

import "./PageViewAccount.css"

import Cuenta from "../Cuenta"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PageViewAccount = () => {
  return (
    <div className='container_PageViewAccount'>

    <div className='container_header'>
      <Header />
    </div>
    <div className='container_main'>
      <Cuenta />
    </div>

    <div className='container_footer'>
      <Footer /> 
    </div>

    </div>
  )
}

export default PageViewAccount