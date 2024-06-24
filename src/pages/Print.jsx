import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MiddleSection from '../components/Services/print/MiddleSection'
import WebCards from '../components/Services/print/WebCards'
import Hero from '../components/Services/print/Hero'
const Print = () => {
    return (
        <>
            <Header />
            <Hero/>
            <MiddleSection/>
            <WebCards/>
            <Footer />
        </>)
}

export default Print