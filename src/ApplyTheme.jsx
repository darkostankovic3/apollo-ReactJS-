import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { ThemeProvider as ThemeChangeProvider, ThemeStateContext } from './context/ThemeContext';

const ApplyTheme = ({ children }) => (
  <ThemeChangeProvider>
    <ThemeStateContext.Consumer>
      {(theme) => (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      )}
    </ThemeStateContext.Consumer>
  </ThemeChangeProvider>
);

export default ApplyTheme;
