import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { SiGmail } from "react-icons/si";
import profileImage from "../../assets/Trial02.jpg"; // Example profile image import

const StyledHome = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${profileImage}) no-repeat center center fixed;
  background-size: cover;
  color: #fff;
  overflow: hidden;
  text-align: center;
  padding: 0 2rem; /* Add horizontal padding for small screens */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroSection = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px; /* Increase max-width for better text visibility */
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800; /* Boldest font weight for emphasis */
  font-size: 2rem; /* Adjusted font size */
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7); /* Strong text shadow for prominence */
  line-height: 1.2; /* Adjust line height for better spacing */
  text-transform: uppercase; /* Convert text to uppercase */
  
  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller font size for tablets */
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem; /* Even smaller font size for phones */
  }
`;

const HeroText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem; /* Adjusted font size */
  font-weight: 500;
  line-height: 1.6;
  margin-top: 1rem;
  text-transform: uppercase; /* Convert text to uppercase */
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add text shadow for better readability */
  
  @media (max-width: 768px) {
    font-size: 0.9rem; /* Smaller font size for tablets */
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem; /* Even smaller font size for phones */
  }
`;

const SocialIcons = styled.div`
  margin-top: 2rem;

  & > a {
    font-size: 2rem;
    color: #fff;
    margin: 0 1rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #007bff; /* Highlight color on hover */
      transform: scale(1.1); /* Slightly enlarge icons on hover */
    }

    @media (max-width: 768px) {
      font-size: 1.5rem; /* Smaller icon size for tablets */
    }
    
    @media (max-width: 480px) {
      font-size: 1.2rem; /* Even smaller icon size for phones */
    }
  }
`;

const Home = () => {
  let today = new Date();
  let hour = today.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  return (
    <IconContext.Provider value={{ size: "2.5rem" }}>
      <StyledHome id="home">
        <Overlay />
        <HeroSection>
          <HeroTitle>
            {greeting}<br />
            I AM BILLY
          </HeroTitle>
          <HeroText>
            WELCOME TO MY PERSONAL SPACE WHERE INNOVATION MEETS PASSION.
          </HeroText>
          <SocialIcons>
            <a href="mailto:Billymkings@gmail.com" aria-label="Email">
              <SiGmail />
            </a>
          </SocialIcons>
        </HeroSection>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
