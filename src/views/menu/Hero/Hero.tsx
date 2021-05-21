import React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import {
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box
      position='relative'
      height={{ base: '200px', sm: '400px' }}
      display='flex'
      alignItems='center'
      justifyContent='center'
      overflow='hidden'
    >
      <Box px='4'>
        <Text
          fontSize={{ base: '2xl', sm: '5xl' }}
          textTransform='capitalize'
          fontWeight='bold'
        >
          Your desired MEAL within your reach{' '}
        </Text>
        <InputGroup size='lg'>
          <Input pr='4.5rem' type='text' placeholder='Search catalog...' />
          <InputRightElement width='5rem'>
            <Button
              h='2.5rem'
              size='sm'
              bgColor='red.800'
              _hover={{ bg: 'red.900' }}
              color='white'
            >
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
      <Image
        src='./images/spicy-2.jpg'
        alt='Hero 2'
        height='400px'
        position='absolute'
        right='0.5'
        top='0.5'
        zIndex='hide'
        style={{ opacity: '0.7' }}
      />
    </Box>
  );
};

export default Hero;
