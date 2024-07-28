import React from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";

const StyledFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
`;

const FooterSmallTitleWrapper = styled.div`
  margin-bottom: 1rem;
`;

const FooterSmallTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const FooterBigLinkContainer = styled.div`
  margin-bottom: 2rem;
`;

const FooterBigLink = styled.a`
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
  position: relative;

  &:hover::after {
    content: attr(data-hover);
    position: absolute;
    left: 0;
    top: 100%;
    white-space: nowrap;
    background: rgba(0, 0, 0, 0.8);
    padding: 0.5rem;
    border-radius: 0.25rem;
  }
`;

const FooterContacts = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterContact = styled.div`
  flex: 1;
  min-width: 200px;
`;

const ContactHeader = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ContactLink = styled.a`
  font-size: 1rem;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  & > svg {
    vertical-align: middle;
    margin-right: 0.5rem;
  }
`;

const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  & > a {
    font-size: 1.5rem;
  }
`;

const FooterLine = styled.hr`
  border: none;
  border-top: 1px solid #555;
  margin: 2rem 0;
`;

const Footer = () => {
  const toTop = () => {
    scroll.scrollToTop({ delay: 0, duration: 0 });
  };

  const year = new Date().getFullYear();

  return (
    <StyledFooter id="contactme">
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>Get in Touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      <FooterBigLinkContainer>
        <FooterBigLink
          href="#"
          onClick={toTop}
          data-hover="Let's talk!"
        >
        </FooterBigLink>
      </FooterBigLinkContainer>

      <FooterSocials>
        <ContactLink
          href="https://github.com/kieyp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          {/* <SiGithub /> */}
        </ContactLink>
        <ContactLink
          // href="https://www.linkedin.com/in/kipbon/"
          // target="_blank"
          // rel="noopener noreferrer"
          // aria-label="LinkedIn"
        >
          {/* <SiLinkedin /> */}
        {/* </ContactLink>
        <ContactLink
          href="https://twitter.com/cheruiyotbonie"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <SiTwitter /> */}
        </ContactLink>
      </FooterSocials>

      <FooterContacts>
        <FooterContact>
          <ContactHeader>Social Media LInks</ContactHeader>
          <ContactHeader>Coming Soon</ContactHeader>
        </FooterContact>
      </FooterContacts>

      <FooterLine />

      <div style={{ textAlign: "center", color: "#888", marginTop: "1rem" }}>
        &copy; {year} Billy. All Rights Reserved.
      </div>
    </StyledFooter>
  );
};

export default Footer;
