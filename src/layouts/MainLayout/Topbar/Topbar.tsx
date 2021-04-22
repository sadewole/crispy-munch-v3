import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import {
  Link,
  Flex, Spacer, Box, Button
} from "@chakra-ui/react";

const Topbar = () => {
  return (
    <Flex px="20" py="5">
      <Box p="2">
        <Link as={RouterLink} to="/" >Crispy Munch</Link>
      </Box>
      <Spacer />
      <Box p="2" >
        <Link as={RouterLink} to="/" mr="4" >Menu</Link>
        <Button>Login</Button>
      </Box>
    </Flex>
  );
};

export default Topbar;
