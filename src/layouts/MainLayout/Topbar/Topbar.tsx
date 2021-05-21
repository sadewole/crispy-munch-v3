import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Link, Flex, Spacer, Box, Button, Container } from '@chakra-ui/react';
import { Logo } from 'src/components/Logo';
import { FaCartPlus } from 'react-icons/fa';
import { useAuth } from 'src/context/authContext';
import UserDropdown from './UserDropdown';

type toggleFunc = () => void;

const Topbar = ({ toggleLogin }: { toggleLogin: toggleFunc }) => {
  const {
    authState: { isAuthenticated, user },
    logout,
  } = useAuth();
  return (
    <Box bg='transparent' py='5' overflow='hidden'>
      <Container maxWidth='container.xl'>
        <Flex>
          <Box p='2'>
            <Link as={RouterLink} to='/'>
              <Logo />
            </Link>
          </Box>
          <Spacer />
          <Box p='2' display='flex' alignItems='center'>
            {isAuthenticated && <UserDropdown user={user} logout={logout} />}
            <Link as={RouterLink} to='/menu' mr='4' color='red.800'>
              Menu
            </Link>
            {!isAuthenticated ? (
              <Button
                bgColor='red.800'
                _hover={{ bg: 'red.900' }}
                color='white'
                onClick={toggleLogin}
              >
                Login
              </Button>
            ) : (
              <Button
                leftIcon={<FaCartPlus />}
                bgColor='red.800'
                _hover={{ bg: 'red.900' }}
                color='white'
                as={RouterLink}
                to='/cart'
              >
                Cart
              </Button>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Topbar;
