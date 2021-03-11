import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  SocialIconLink,
  FormButton,
} from "./ContactElements";
import {
  FaDiscord,
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">SaekiMon</Icon>
          <FormContent>
            <Form>
              <FormH1>Choose the prefered method to contact me!</FormH1>
              <SocialIconLink
                href="https://www.facebook.com/szymon.ruszkiewicz"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook /> Facebook - Szymon Piotr Ruszkiewicz
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/szymon-ruszkiewicz-548526180/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin /> LinkedIn - Szymon Ruszkiewicz{" "}
              </SocialIconLink>
              <SocialIconLink href="#" aria-label="Discord">
                <FaDiscord /> Discord - #Sathean9222{" "}
              </SocialIconLink>
              <SocialIconLink
                href="mailto:ruszkiewiczszymon@gmail.com"
                target="_blank"
                aria-label="gmail"
              >
                <FaMailBulk /> ruszkiewiczszymon@gmail.com
              </SocialIconLink>
              <SocialIconLink href="#" aria-label="phone">
                <FaPhone /> +48 691 636 192
              </SocialIconLink>
              <FormButton to="/">Back to Home</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
