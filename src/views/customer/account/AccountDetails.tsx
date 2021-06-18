import React from 'react';
import { Box, Divider, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

type accountDetailsProp = {
  user: any;
};

const AccountDetails = ({ user }: accountDetailsProp) => {
  return (
    <Box py='3' border='1px' borderColor='gray.200' my='4'>
      <Text fontSize='lg' fontWeight='semibold' px='3'>
        Account Details
      </Text>
      <Divider />
      <Box p='3'>
        <Text fontSize='sm'>
          {user?.firstName} {user?.lastName}
        </Text>
        <Text fontSize='sm' color='gray.500'>
          {user?.email}
        </Text>
      </Box>
      <Box px='3' mt='3'>
        <Button
          bgColor='red.500'
          _hover={{ bg: 'red.600' }}
          color='white'
          width='full'
        >
          Change Password
        </Button>
      </Box>
    </Box>
  );
};

export default AccountDetails;
