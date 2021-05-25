import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

const Profile = () => {
  return (
    <Box my='4'>
      <Text fontWeight='bold' fontSize='2xl' mb='2'>
        Your Delivery Details
      </Text>
      <Box bgColor='beige' overflow='hidden' borderRadius='base' p='3'>
        <Box>
          <Text fontSize='lg'>
            <b>Email:</b> <small>samueladewole15@gmail.com</small>
          </Text>
          <Text fontSize='lg'>
            <b>Phone no.:</b> <small>090456789843</small>
          </Text>
          <Text fontSize='lg' fontWeight='bold'>
            Address:
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus reprehenderit commodi eligendi in, nihil perferendis
            amet laboriosam incidunt temporibus provident, alias eveniet! Odit,
            dolor aspernatur quod expedita quas aliquid itaque?
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
