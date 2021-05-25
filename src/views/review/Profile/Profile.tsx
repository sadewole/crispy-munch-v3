import { Box, Link, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';
import ProfileForm from './ProfileForm';

type ProfileProps = {
  profile: { phone: string; address: string };
  user: any;
  loading: boolean;
};

const Profile: React.FC<ProfileProps> = ({ profile, user, loading }) => {
  const [editProfile, setEditProfile] = useState(profile?.phone || false);

  return (
    <Box my='4'>
      <Text fontWeight='bold' fontSize='2xl' mb='2'>
        Your Delivery Details
      </Text>
      {!editProfile && (
        <Link color='blue' onClick={() => setEditProfile(true)}>
          change address
        </Link>
      )}
      <Box bgColor='beige' overflow='hidden' borderRadius='base' p='3'>
        {loading ? (
          <Box display='flex' alignItems='center' justifyContent='center'>
            <Spinner color='red.500' />
          </Box>
        ) : (
          <Box>
            <Text fontSize='lg'>
              <b>Email:</b> <small>{user.email}</small>
            </Text>
            {!editProfile ? (
              <>
                <Text fontSize='lg'>
                  <b>Phone no.:</b> <small>{profile.phone}</small>
                </Text>
                <Text fontSize='lg' fontWeight='bold'>
                  Address:
                </Text>
                <Text>{profile.address}</Text>
              </>
            ) : (
              <ProfileForm setEditProfile={setEditProfile} profile={profile} />
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Profile;
