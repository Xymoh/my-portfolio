import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import AboutSection from '../components/About'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data'

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <div id="hero">
                <HeroSection />
                <AboutSection />
            </div>
            <div id="projects">
                <InfoSection {...homeObjOne}/>
                <InfoSection {...homeObjTwo}/>
                <InfoSection {...homeObjThree}/>
            </div>
            <div id="resume">
                <InfoSection {...homeObjFour}/>
            </div>
            <Footer />
        </>
    )
}


export default Home