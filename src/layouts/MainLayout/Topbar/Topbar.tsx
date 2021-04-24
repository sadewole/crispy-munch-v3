import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import {
  Link,
  Flex, Spacer, Box, Button
} from "@chakra-ui/react";
import { Logo } from 'src/components/Logo';

type toggleFunc = () => void;

const Topbar = ({ toggleLogin }: { toggleLogin: toggleFunc; }) => {

  return (
    <Box bg="transparent" px="20" py="5" overflow="hidden" marginBottom="10" >
      <Flex>
        <Box p="2">
          <Link as={RouterLink} to="/" ><Logo /></Link>
        </Box>
        <Spacer />
        <Box p="2" >
          <Link as={RouterLink} to="/menu" mr="4" >Menu</Link>
          <Button bgColor="red.800" _hover={{ bg: "red.900" }} color="white" onClick={toggleLogin} >Login</Button>
        </Box>
      </Flex>
    </Box >
  );
};

export default Topbar;
