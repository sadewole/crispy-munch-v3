import { Box } from '@chakra-ui/layout';
import React from 'react';
import { Logo } from './Logo';

const SplashScreen = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      height='100vh'
    >
      <Logo />
    </Box>
  );
};

export default SplashScreen;
