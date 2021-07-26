import { createTheme } from '@material-ui/core';
import { TypographyStyleOptions } from '@material-ui/core/styles/createTypography';
import {
  // Cheerful and Energetic
  GRAY_BLUE,
  SKY_BLUE,
  NAVY_BLUE,
  PASTEL_YELLOW,
  TANGERINE,
  // Lively Yet Soothing
  LIGHT_GRAY,
  MINT,
  DARK_CYAN,
  LEMON,
  MUSTARD_YELLOW,
} from './colors';

const appBreakpoints = {
  values: {
    xs: 0,
    sm: 416,
    md: 835,
    lg: 1300,
    xl: 1600,
  },
};

const cheerfulAndEnergeticHeaders: TypographyStyleOptions = {
  fontFamily: 'Arial',
  fontWeight: 700,
  color: TANGERINE,
};

export const cheerfulAndEnergetic = createTheme({
  palette: {
    primary: {
      main: GRAY_BLUE,
      light: SKY_BLUE,
      dark: NAVY_BLUE,
    },
    secondary: {
      main: PASTEL_YELLOW,
      dark: TANGERINE,
    },
  },
  typography: {
    h1: cheerfulAndEnergeticHeaders,
    h2: cheerfulAndEnergeticHeaders,
    h3: cheerfulAndEnergeticHeaders,
    h4: cheerfulAndEnergeticHeaders,
    h5: cheerfulAndEnergeticHeaders,
    h6: cheerfulAndEnergeticHeaders,
  },
  breakpoints: appBreakpoints,
});

const livelyYetSoothingHeaders: TypographyStyleOptions = {
  fontFamily: 'Arial',
  fontWeight: 700,
  color: MUSTARD_YELLOW,
};

export const livelyYetSoothing = createTheme({
  palette: {
    primary: {
      main: MINT,
      light: LIGHT_GRAY,
      dark: DARK_CYAN,
    },
    secondary: {
      main: LEMON,
      dark: MUSTARD_YELLOW,
    },
  },
  typography: {
    h1: livelyYetSoothingHeaders,
    h2: livelyYetSoothingHeaders,
    h3: livelyYetSoothingHeaders,
    h4: livelyYetSoothingHeaders,
    h5: livelyYetSoothingHeaders,
    h6: livelyYetSoothingHeaders,
  },
  breakpoints: appBreakpoints,
});
