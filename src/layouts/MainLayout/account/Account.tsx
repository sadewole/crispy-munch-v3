import { Container, Box } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Page from 'src/components/Page';
import Sidebar from './Sidebar';

const Account = () => {
  return (
    <Page title='Account'>
      <Container maxWidth='container.lg' mb='40'>
        <HStack spacing='20px' alignItems='flex-start'>
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
      </Container>
    </Page>
  );
};

export default Account;
