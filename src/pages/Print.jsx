import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MiddleSection from '../components/services/print/MiddleSection'
import WebCards from '../components/services/print/WebCards'
import PageCards from '../components/services/print/LinkCard'
import Hero from '../components/services/print/Hero'
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