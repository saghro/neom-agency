import React from 'react'
import Hero from '../components/Services/Devweb/Hero'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MiddleSection from '../components/Services/Devweb/MiddleSection'
import WebCards from '../components/Services/Devweb/WebCards'
import DevCases from '../components/Services/Devweb/DevCases'
const Webdev = () => {
    return (
        <>
            <Header />
            <Hero />
            <MiddleSection/>
            <WebCards/>
            <DevCases/>
            <Footer />
        </>)
}

export default Webdev