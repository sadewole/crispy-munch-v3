import { Box } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/progress';
import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
      } else {
        const diff = Math.random() * 10;
        setProgress(progress + diff);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      height='100vh'
    >
      <Box maxWidth='400px' mb='8'>
        <Progress
          size='xs'
          hasStripe
          isAnimated
          value={progress}
          min={20}
          colorScheme='blackAlpha'
          width='400px'
          maxW='400px'
        />
      </Box>
      <Logo />
    </Box>
  );
};

export default SplashScreen;
