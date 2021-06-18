import React from 'react';
import { Box, Divider, Text } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import ProfileForm from './ProfileForm';

type deliveryAddressProps = {
  profile: any;
};

const DeliveryAddress = ({ profile }: deliveryAddressProps) => {
  const [editProfile, setEditProfile] = React.useState(false);
  return (
    <Box py='3' border='1px' borderColor='gray.200' my='4'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        px='3'
      >
        <Text fontSize='lg' fontWeight='semibold'>
          {editProfile ? 'Edit' : ''} Delivery Address
        </Text>
        <IconButton
          onClick={() => setEditProfile(!editProfile)}
          aria-label='Search database'
          icon={editProfile ? <FaTimes /> : <FaPencilAlt />}
        />
      </Box>
      <Divider />
      {editProfile ? (
        <Box p='3'>
          <ProfileForm profile={profile} setEditProfile={setEditProfile} />
        </Box>
      ) : (
        <React.Fragment>
          <Box p='3'>
            <Text fontSize='sm'>Address:</Text>
            <Text fontSize='sm' color='gray.500'>
              {profile?.address ? profile?.address : '--No Address--'}
            </Text>
          </Box>
          <Box p='3'>
            <Text fontSize='sm'>Phone Number:</Text>
            <Text fontSize='sm' color='gray.500'>
              {profile?.phone ? profile?.phone : '--No phone number--'}
            </Text>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default DeliveryAddress;
