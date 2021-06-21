import { Container } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'src/store';
import { fetchCart } from 'src/slices/order';
import { fetchUserProfile } from 'src/slices/user';
import { useAuth } from 'src/context/authContext';
import Profile from './Profile';
import Summary from './Summary';
import Payment from './Payment';
import Page from 'src/components/Page';
import AuthGuard from 'src/components/Guard/AuthGuard';

const Review = () => {
  const dispatch = useDispatch();
  const {
    authState: { isAuthenticated, user },
  } = useAuth();
  // @ts-ignore
  const { carts, loading: loadingA } = useSelector((state) => state.order);
  // @ts-ignore
  const { profile, loading: loadingB } = useSelector((state) => state.user);

  const [editProfile, setEditProfile] = React.useState(false);

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchUserProfile());
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (!profile?.phone || !profile?.address) {
      setEditProfile(true);
    }
  }, [profile?.phone, profile?.address]);

  if (!loadingA && !carts.length) {
    return <Navigate to='/menu' />;
  }

  return (
    <AuthGuard>
      <Page title='Cart Review'>
        <Container maxWidth='container.lg'>
          <Profile
            profile={profile}
            user={user}
            loading={loadingB}
            editProfile={editProfile}
            setEditProfile={setEditProfile}
          />
          <Summary carts={carts} loading={loadingA} />
          <Payment editProfile={editProfile} user={user} carts={carts} />
        </Container>
      </Page>
    </AuthGuard>
  );
};

export default Review;
