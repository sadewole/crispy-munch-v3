import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Link, Flex, Spacer, Box, Button, Container } from '@chakra-ui/react';
import { Logo } from 'src/components/Logo';
import { FaCartPlus } from 'react-icons/fa';
import { useAuth } from 'src/context/authContext';
import UserDropdown from './UserDropdown';
import { FiUserCheck } from 'react-icons/fi';

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
            <Box display={{ base: 'none', sm: 'block' }}>
              {isAuthenticated && <UserDropdown user={user} logout={logout} />}
            </Box>
            <Link
              as={RouterLink}
              to='/menu'
              mr='4'
              color='red.800'
              activeClassName='underline'
            >
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
              <>
                <Box display={{ base: 'flex', sm: 'none' }}>
                  <Link
                    as={RouterLink}
                    to='/customer/account'
                    mr='4'
                    color='red.800'
                    activeClassName='bg-red'
                  >
                    <FiUserCheck size='24' />
                  </Link>
                  <Link
                    as={RouterLink}
                    to='/cart'
                    color='red.800'
                    activeClassName='bg-red'
                  >
                    <FaCartPlus size='24' />
                  </Link>
                </Box>
                <Button
                  display={{ base: 'none', sm: 'flex' }}
                  leftIcon={<FaCartPlus />}
                  bgColor='red.800'
                  _hover={{ bg: 'red.900' }}
                  color='white'
                  as={RouterLink}
                  to='/cart'
                >
                  Cart
                </Button>
              </>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Topbar;
