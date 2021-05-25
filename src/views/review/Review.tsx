import { Container } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/store';
import { fetchCart } from 'src/slices/order';
import { useAuth } from 'src/context/authContext';
import Profile from './Profile';
import Summary from './Summary';

const Review = () => {
  const dispatch = useDispatch();
  const {
    authState: { isAuthenticated },
  } = useAuth();
  // @ts-ignore
  const { carts, loading } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch, isAuthenticated]);
  return (
    <Container maxWidth='container.lg'>
      <Profile />
      <Summary carts={carts} loading={loading} />
    </Container>
  );
};

export default Review;
