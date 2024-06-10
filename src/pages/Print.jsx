import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MiddleSection from '../components/Services/print/MiddleSection'
import WebCards from '../components/Services/print/WebCards'
import PageCards from '../components/Services/print/LinkCard'
import Hero from '../components/Services/Devweb/Hero'
const Webdev = () => {
    return (
        <>
            <Header />
            <Hero/>
            <MiddleSection/>
            <WebCards/>
            <PageCards/>
            <Footer />
        </>)
}

export default Webdev