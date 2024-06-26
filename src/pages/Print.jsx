import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MiddleSection from '../components/services/print/MiddleSection'
import WebCards from '../components/services/print/WebCards'
import Hero from '../components/services/print/Hero'
const Print = () => {
    return (
        <>
            <Header />
            <Hero/>
            <MiddleSection/>
            <WebCards/>
            <Footer />
        </>
        )
}

export default Print