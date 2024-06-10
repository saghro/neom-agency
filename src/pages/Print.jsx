import React from 'react'
import Hero from '../components/print/Hero'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MiddleSection from '../components/print/MiddleSection'
import WebCards from '../components/print/WebCards'
import PageCards from '../components/print/LinkCard'
const Webdev = () => {
    return (
        <>
            <Header />
            <Hero />
            <MiddleSection/>
            <WebCards/>
            <PageCards/>
            <Footer />
        </>)
}

export default Webdev