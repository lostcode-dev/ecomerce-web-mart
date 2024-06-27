'use client';

import { GlobalStyle } from '@/styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Header from './Header/page';
import Hero from './Hero/page';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
    </ThemeProvider>
  );
}
