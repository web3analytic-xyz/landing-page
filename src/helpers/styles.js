import { createGlobalStyle } from 'styled-components';
import InterRegular from '../assets/fonts/Inter-Regular.ttf';
import InterMedium from '../assets/fonts/Inter-Medium.ttf';
import InterSemiBold from '../assets/fonts/Inter-SemiBold.ttf';
import InterBold from '../assets/fonts/Inter-Bold.ttf';
import InterExtraBold from '../assets/fonts/Inter-ExtraBold.ttf';

const sizes = {
  mobileS: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  laptopXS: '1740px',
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  laptopXS: `(min-width: ${sizes.laptopXS})`,
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter-Regular';
    src: url(${InterRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Inter-Medium';
    src: url(${InterMedium}) format('truetype');
  }
  @font-face {
    font-family: 'Inter-SemiBold';
    src: url(${InterSemiBold}) format('truetype');
  }
  @font-face {
    font-family: 'Inter-Bold';
    src: url(${InterBold}) format('truetype');
  }
  @font-face {
    font-family: 'Inter-ExtraBold';
    src: url(${InterExtraBold}) format('truetype');
  }
  /* html {
    @media ${devices.mobileS} {
        font-size: 80%
    }
    @media ${devices.mobileL} {
        font-size: 85%
    }
    @media ${devices.tablet} {
        font-size: 90%
    }
    @media ${devices.laptop} {
        font-size: 95%
    }
    @media ${devices.laptopL} {
        font-size: 100%
    }
  } */
`;

export default GlobalStyle;
