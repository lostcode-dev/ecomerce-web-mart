'use client';

import {
  BigCTA,
  BlueText,
  ButtonCTA,
  Container,
  HeroSection,
  SmallCTA,
} from './styled';

export default function Hero() {
  return (
    <HeroSection>
      <Container>
        <BigCTA>
          Listen to the <BlueText>amazing</BlueText> music sound.
        </BigCTA>
        <SmallCTA>Experience music like never before</SmallCTA>
        <ButtonCTA>Shopping Now</ButtonCTA>
      </Container>
    </HeroSection>
  );
}
