import React from 'react';
import { Image } from '@chakra-ui/image';
import { ImageProps, forwardRef, Box } from '@chakra-ui/react';

export const Logo = forwardRef<ImageProps, 'img'>((props, ref) => {
  return (
    <Box
      position='relative'
      display='flex'
      alignItems='center'
      justifyContent='center'
      height='50px'
      width='100px'
    >
      <Image
        src='/logo.png'
        alt='logo'
        ref={ref}
        {...props}
        position='absolute'
      />
    </Box>
  );
});
