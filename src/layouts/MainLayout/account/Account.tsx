import { Container, Box } from '@chakra-ui/layout';
import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Page from 'src/components/Page';
import Sidebar from './Sidebar';

const Account = () => {
  return (
    <Page title='Account'>
      <Container maxWidth='container.lg' mb='40'>
        <HStack
          spacing={{ base: 0, md: '20px' }}
          alignItems='flex-start'
          display={{ base: 'block', md: 'flex' }}
        >
          <Sidebar />
          <Box
            flex={1}
            bgColor='beige'
            overflow='hidden'
            borderRadius='base'
            p='4'
          >
            <Outlet />
          </Box>
        </HStack>
        <Box my='4' display={{ base: 'block', md: 'none' }}>
          <Button colorScheme='red' color='white' width='full'>
            Logout
          </Button>
        </Box>
      </Container>
    </Page>
  );
};

export default Account;
