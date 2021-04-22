import * as React from "react";
import { useRoutes } from 'react-router-dom';
import {
  ChakraProvider, theme
} from "@chakra-ui/react";
import routes from './routes';

export const App = () => {
  const routing = useRoutes(routes);

  return (
  <ChakraProvider theme={theme}>
    {routing}
  </ChakraProvider>
  );
};
