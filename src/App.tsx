import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AuthWrapper } from 'src/context/authContext';
import routes from './routes';

import './app.css';

export const App = () => {
  const routing = useRoutes(routes);

  return (
    <ChakraProvider theme={theme}>
      <AuthWrapper>{routing}</AuthWrapper>
    </ChakraProvider>
  );
};
