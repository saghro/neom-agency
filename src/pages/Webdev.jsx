import React from 'react'
import Hero from '../components/services/Devweb/Hero'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MiddleSection from '../components/services/Devweb/MiddleSection'
import WebCards from '../components/services/Devweb/WebCards'
const Webdev = () => {
    return (
        <>
            <Header />
            <Hero />
            <MiddleSection/>
            <WebCards/>
            <Footer />
        </>)
}

export default Webdev