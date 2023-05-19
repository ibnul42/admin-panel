import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'



const Layout = () => {

    return (
        <div className='h-screen w-screen flex overflow-hidden'>
            <Sidebar />
            <div className="overflow-y-auto flex-1 flex flex-col">
                <Header />
                <Content />
                <Footer />
            </div>
        </div>
    )
}

export default Layout