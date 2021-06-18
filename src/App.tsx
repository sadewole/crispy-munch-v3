import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AuthWrapper } from 'src/context/authContext';
import routes from './routes';
import { Global, css } from '@emotion/react';

import './app.css';

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export const App = () => {
  const routing = useRoutes(routes);

  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <AuthWrapper>{routing}</AuthWrapper>
    </ChakraProvider>
  );
};
