import { Container, Box, Text, Link } from '@chakra-ui/layout';
import { Button, Image } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Page from 'src/components/Page';

const NotFound = () => {
  return (
    <Page title='404: Not Found'>
      <Container maxWidth='container.lg' my='20'>
        <Text fontWeight='bold' fontSize='3xl'>
          404: The page you are looking for isn’t here
        </Text>
        <Text fontSize='xl'>
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation.
        </Text>
        <Box display='flex' justifyContent='center' mt='4'>
          <Image src='/images/404.svg' alt='logo' />
        </Box>
        <Box display='flex' justifyContent='center' mt='4'>
          <Link as={RouterLink} to='/'>
            <Button
              variant='solid'
              bgColor='red.800'
              _hover={{ bg: 'red.900' }}
              color='white'
            >
              Back to home
            </Button>
          </Link>
        </Box>
      </Container>
    </Page>
  );
};

export default NotFound;
