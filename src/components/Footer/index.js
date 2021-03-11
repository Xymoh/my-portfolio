import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinkRouter,
  FooterLinkScroll,
  FooterWebLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About</FooterLinkTitle>
              <FooterLinkScroll
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
              >
                About me
              </FooterLinkScroll>
              <FooterLinkScroll
                to="Project1"
                smooth={true}
                duration={500}
                offset={-80}
              >
                Projects
              </FooterLinkScroll>
              <FooterLinkRouter to="/contact">Contact me</FooterLinkRouter>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterWebLink
                href="https://www.facebook.com/szymon.ruszkiewicz"
                target="_blank"
              >
                Facebook
              </FooterWebLink>
              <FooterWebLink
                href="https://www.linkedin.com/in/szymon-ruszkiewicz-548526180/"
                target="_blank"
              >
                LinkedIn
              </FooterWebLink>
              <FooterWebLink href="https://github.com/Xymoh" target="_blank">
                GitHub
              </FooterWebLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              SaekiMon
            </SocialLogo>
            <WebsiteRights>
              Szymon Ruszkiewicz &#169; {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/szymon.ruszkiewicz"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/szymon-ruszkiewicz-548526180/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/Xymoh"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
