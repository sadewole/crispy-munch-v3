import { Box, Divider, Grid, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React, { useEffect } from 'react';
import Page from 'src/components/Page';
import { useAuth } from 'src/context/authContext';
import { fetchUserProfile } from 'src/slices/user';
import { useDispatch, useSelector } from 'src/store';
import AccountDetails from './AccountDetails';
import DeliveryAddress from './DeliveryAddress';

const Account = () => {
  const dispatch = useDispatch();
  const {
    authState: { user, isAuthenticated },
  } = useAuth();
  // @ts-ignore
  const { profile, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch, isAuthenticated]);

  return (
    <Page title='Customer Account'>
      <Box p='2'>
        <Text fontSize='lg' fontWeight='semibold'>
          Account Overview
        </Text>
        <Divider />
        <Grid
          minHeight='200px'
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap='2'
        >
          <AccountDetails user={user} />
          {loading ? (
            <Box
              mt='4'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <Spinner speed='1s' size='lg' color='red.500' thickness='4px' />
            </Box>
          ) : (
            <DeliveryAddress profile={profile} />
          )}
        </Grid>
      </Box>
    </Page>
  );
};

export default Account;
