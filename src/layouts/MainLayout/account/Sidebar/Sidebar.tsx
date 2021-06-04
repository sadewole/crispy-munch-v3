import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Box } from '@chakra-ui/layout';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import {
  FiUserCheck,
  FiChevronUp,
  FiChevronDown,
  FiLogOut,
  FiInbox,
  FiUser,
} from 'react-icons/fi';

const Sidebar = () => {
  return (
    <Box w='250px' bgColor='beige' overflow='hidden' borderRadius='base' py='4'>
      <List spacing={3}>
        <RouterLink to='/customer/account'>
          <ListItem p='3'>
            <ListIcon as={FiUser} color='green.500' />
            Account
          </ListItem>
        </RouterLink>
        <RouterLink to='/customer/order'>
          <ListItem p='3'>
            <ListIcon as={FiInbox} color='green.500' />
            Order
          </ListItem>
        </RouterLink>
      </List>
    </Box>
  );
};

export default Sidebar;
