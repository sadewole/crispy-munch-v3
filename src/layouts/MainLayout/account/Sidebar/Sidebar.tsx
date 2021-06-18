import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Box, Divider } from '@chakra-ui/layout';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { FiLogOut, FiInbox, FiUser } from 'react-icons/fi';
import { useAuth } from 'src/context/authContext';

const Sidebar = () => {
  const { logout } = useAuth();
  return (
    <Box w='250px' bgColor='beige' overflow='hidden' borderRadius='base' py='4'>
      <List spacing={3}>
        <RouterLink to='/customer/account'>
          <ListItem p='3' _hover={{ backgroundColor: 'gray.100' }}>
            <ListIcon as={FiUser} color='green.500' />
            Account
          </ListItem>
        </RouterLink>
        <RouterLink to='/customer/order'>
          <ListItem p='3' _hover={{ backgroundColor: 'gray.100' }}>
            <ListIcon as={FiInbox} color='green.500' />
            Order
          </ListItem>
        </RouterLink>
        <Divider />
        <RouterLink to='/' onClick={() => logout()}>
          <ListItem p='3' _hover={{ backgroundColor: 'gray.100' }}>
            <ListIcon as={FiLogOut} color='green.500' />
            Logout
          </ListItem>
        </RouterLink>
      </List>
    </Box>
  );
};

export default Sidebar;
