import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#709c0d'//green
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#0d709c', //purple
    },
  },
});

const Palette: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default Palette;
