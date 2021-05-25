import { Container } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/store';
import { fetchCart } from 'src/slices/order';
import { fetchUserProfile } from 'src/slices/user';
import { useAuth } from 'src/context/authContext';
import Profile from './Profile';
import Summary from './Summary';

const Review = () => {
  const dispatch = useDispatch();
  const {
    authState: { isAuthenticated, user },
  } = useAuth();
  // @ts-ignore
  const { carts, loading: loadingA } = useSelector((state) => state.order);
  // @ts-ignore
  const { profile, loading: loadingB } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchUserProfile());
  }, [dispatch, isAuthenticated]);

  return (
    <Container maxWidth='container.lg'>
      <Profile profile={profile} user={user} loading={loadingB} />
      <Summary carts={carts} loading={loadingA} />
    </Container>
  );
};

export default Review;
