import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/GlobalStyle';
import Theme from './Styles/Theme';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>,
  document.getElementById('root')
);
