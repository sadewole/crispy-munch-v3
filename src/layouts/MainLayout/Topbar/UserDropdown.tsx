import React from 'react';
import { createPopper } from '@popperjs/core';
import { Box, ListItem, List, Text } from '@chakra-ui/layout';
import { Link as RouterLink } from 'react-router-dom';
import {
  FiUserCheck,
  FiChevronUp,
  FiChevronDown,
  FiLogOut,
  FiInbox,
  FiUser,
} from 'react-icons/fi';
import { Button } from '@chakra-ui/button';
import ClickAwayListener from 'react-click-away-listener';

type UserDropdownProps = {
  user: any;
  logout: () => void;
};

const UserDropdown = ({ user, logout }: UserDropdownProps) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef<any>();
  const popoverDropdownRef = React.createRef<any>();
  const openDropdownPopover = () => {
    setDropdownPopoverShow(true);
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    });
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <Button
        display='flex'
        alignItems='center'
        colorScheme='red'
        variant='ghost'
        mr='4'
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <FiUserCheck />
        <Text mx='2'>Hi, {user.firstName}</Text>
        {dropdownPopoverShow ? <FiChevronUp /> : <FiChevronDown />}
      </Button>
      <ClickAwayListener
        onClickAway={() => dropdownPopoverShow && closeDropdownPopover()}
      >
        <Box
          as={List}
          ref={popoverDropdownRef}
          hidden={!dropdownPopoverShow}
          bg='white'
          minWidth='48'
          shadow='lg'
          rounded='base'
          zIndex='popover'
          py={2}
          listStyleType='none'
          textAlign='left'
        >
          <RouterLink to='/customer/account'>
            <ListItem
              bg='transparent'
              _hover={{ bg: 'gray.200' }}
              py='2'
              px='4'
              fontSize='md'
              color='gray.800'
              display='flex'
              alignItems='center'
              onClick={closeDropdownPopover}
            >
              <FiUser />
              <Text mx='2'>Account</Text>
            </ListItem>
          </RouterLink>
          <RouterLink to='/customer/order'>
            <ListItem
              bg='transparent'
              _hover={{ bg: 'gray.200' }}
              py='2'
              px='4'
              fontSize='md'
              color='gray.800'
              display='flex'
              alignItems='center'
              onClick={closeDropdownPopover}
            >
              <FiInbox />
              <Text mx='2'>Order</Text>
            </ListItem>
          </RouterLink>
          <RouterLink to='/' onClick={() => logout()}>
            <ListItem
              bg='transparent'
              _hover={{ bg: 'gray.200' }}
              py='2'
              px='4'
              fontSize='md'
              color='gray.800'
              display='flex'
              alignItems='center'
              onClick={closeDropdownPopover}
            >
              <FiLogOut />
              <Text mx='2'>Logout</Text>
            </ListItem>
          </RouterLink>
        </Box>
      </ClickAwayListener>
    </>
  );
};

export default UserDropdown;
