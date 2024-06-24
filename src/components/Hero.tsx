"use client";

import styled from "styled-components";

const HeroSection = styled.section `
  background: linear-gradient(0deg, rgba(255, 171, 0, 0.64) 0%, rgba(255, 171, 0, 0.64) 100%), #FFF;
  color: #121212;
  min-height: calc(100vh - 92px);

  @media (min-width: 768px) {
    min-height: calc(100vh - 97px);
  }

`

export default function Hero() {
  
  return (
    <>
      <HeroSection>
        <h1>hero page</h1>        
      </HeroSection>   
    </>
  )
}
