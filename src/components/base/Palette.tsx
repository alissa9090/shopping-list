import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { PropsWithChildren } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#709c0d', // green
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#0d709c', // purple
    },
  },
});

const Palette: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Palette;
