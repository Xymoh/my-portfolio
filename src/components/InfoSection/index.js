import React from 'react'
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    ImgWrap, 
    Img,
    UrlLink,
    ButtonLink 
} from './InfoElements'

function InfoSection({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description,
    urllink, 
    buttonLabel, 
    img,
    alt,
    primary,
    dark,
    dark2,
    lightUrlText
}) {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <ButtonLink
                                    href={urllink} 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    offset={-80} 
                                    primary={primary ? 1 : 0} 
                                    dark={dark ? 1 : 0}
                                    ><UrlLink lightUrlText={lightUrlText ? 1 : 0} href={urllink} target="_blank" download="CV-Szymon-Ruszkiewicz.pdf">{buttonLabel}</UrlLink>
                                </ButtonLink>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
             </InfoContainer>   
        </>
    )
}

export default InfoSection
