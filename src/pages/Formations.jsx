import React from 'react'
import Hero from '../components/Services/formations/Hero'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MiddleSection from '../components/Services/formations/MiddleSection'
import WebCards from '../components/Services/formations/WebCards'
import PageCards from '../components/Services/formations/LinkCard'
const Formations = () => {
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

export default Formations