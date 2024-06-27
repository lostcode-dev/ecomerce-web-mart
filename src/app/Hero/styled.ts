import styled from "styled-components";

export const HeroSection = styled.section`
  background: linear-gradient(
      0deg,
      rgba(255, 171, 0, 0.64) 0%,
      rgba(255, 171, 0, 0.64) 100%
    ),
    #fff;
  background-image: url("/heroMobileImg.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  background-repeat: no-repeat;
  color: #121212;
  height: 100dvh;
  padding: calc(2rem + 92px) 2rem 0;
  

  display: flex;
  flex-direction: column;
  
  text-align: center;
  

  @media (min-width: 768px) {
    background-position: 60% 0%;
    background-image: url("/heroFullImg.jpg");
    padding: 0 2rem;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  @media (min-width: 1024px) {
    background-position: 80%;
    padding: 0 10rem;
    text-align: left;
    
  }
  @media (min-width: 1440px) {
    background-position: right;   
    
  }
`;

export const Container = styled.div`  

  @media (min-width: 768px) {
    width: 50%;
    max-width: 436px;    
  }
  @media (min-width: 1440px) {
    width: 50%;
    max-width: 532px;    
  }
  
`

export const BigCTA = styled.h1`
  margin-bottom: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 2.75rem;
  letter-spacing: -0.025rem;

  @media (min-width: 1440px) {
    font-size: 5rem;
    line-height: 5.25rem;
    letter-spacing: -0.1875rem;
    
  }
  
`

export const BlueText = styled.span`
  color: #377DFF;
`

export const SmallCTA = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625rem;
  margin-bottom: 1rem;

  @media (min-width: 1440px) {
    font-size: 1.25rem;
    line-height: 2rem;
    margin-bottom: 1.75rem;    
  }
`

export const ButtonCTA = styled.button`
  background-color: #141718;
  color: #FFF;
  padding: 0.75rem 3.5rem;
  border-radius: 0.5rem;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;

  @media (min-width: 1440px) {
    font-size: 1.125rem;
    line-height: 2rem;
    letter-spacing: -0.025rem;
  }
`
