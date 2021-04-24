import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import Typing from './Typing';
// css
import './hero.css';
import { Button } from '@chakra-ui/button';

const Hero = () => {
  return (
    <Box minHeight="550px" >
      <Container maxW="container.xl">
        <Flex flexWrap="wrap" justifyContent="space-between" >
          <Box maxWidth="lg" display="flex" alignItems="center" justifyContent="center" padding={{ base: 5, sm: 10 }}>
            <Box>
              <Text fontSize={{ base: "2xl", sm: "4xl" }} mb="4">Enjoy the best taste for your  <Typing /></Text>
              <Text fontSize={{ base: "base", md: "2xl" }}>Why eating junk when Crispy Munch is capable of enreaching your taste.</Text>
              <Button _hover={{ bg: "red.900" }} bg="red.800" color="white" textTransform="uppercase" my="5">Explore Menu</Button>
            </Box>
          </Box>

          <Box flex="1" >
            <Box position="relative">
              <div className="shape">
                <img alt="Shapes" src="/images/home/shapes.svg" />
              </div>
              <Box display="flex" alignItems="center" justifyContent="center">
                <div className="hero-image" >
                  <img alt="Presentation" src="/images/home/iphone-right.png" />
                </div>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
