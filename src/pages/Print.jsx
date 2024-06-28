import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MiddleSection from '../components/Services/print/MiddleSection'
import WebCards from '../components/Services/print/WebCards'
import Hero from '../components/Services/print/Hero'
import ComCases from '../components/Services/print/ComCases'

const Print = () => {
    return (
        <>
            <Header />
            <Hero/>
            <MiddleSection/>
            <WebCards/>
            <ComCases/>
            <Footer />
        </>)
} 
export default Print;