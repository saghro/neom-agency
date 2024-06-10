import React from 'react'
import Hero from '../components/formations/Hero'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MiddleSection from '../components/formations/MiddleSection'
import WebCards from '../components/formations/WebCards'
import PageCards from '../components/formations/LinkCard'
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