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
    ButtonLink, 
    UrlRouteLink
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
    lightUrlText,
    downloadLabel,
    urlroutelink
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
                            <UrlRouteLink lightUrlText={lightUrlText ? 1 : 0} to={urlroutelink} target="_blank" download>
                            <UrlLink lightUrlText={lightUrlText ? 1 : 0} href={urllink} target="_blank" download>
                                <ButtonLink
                                    href={urllink} 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    offset={-80} 
                                    primary={primary ? 1 : 0} 
                                    dark={dark ? 1 : 0}
                                    >
                                        {buttonLabel}
                                        {downloadLabel}
                                </ButtonLink>
                                </UrlLink>
                                </UrlRouteLink>
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
