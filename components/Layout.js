import React from 'react'
import Header from './include/Header'
import Footer from './include/Footer'


const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout