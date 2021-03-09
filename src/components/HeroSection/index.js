import React, { useState } from 'react'
import { HeroContainer, HeroBg, ImgBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'

import Image from '../../images/pobrane.png'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src={Image} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hello! I'm Szymon Ruszkiewicz</HeroH1>
                <HeroP>I'm an Computer Science Student with Game and Mobile Specialisation. My main programming languages are Python and C#.</HeroP>
                <HeroBtnWrapper>
                    <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} smooth={true} duration={500} offset={-80}>
                        Discover {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
