import React, { useEffect } from 'react';
import { Box, Container, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useDispatch, useSelector } from 'src/store';
import { fetchCart } from 'src/slices/order';
import CartList from './CartList';
import { useAuth } from 'src/context/authContext';
import Page from 'src/components/Page';

const EmptyCart = () => (
  <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    flexDirection='column'
    position='relative'
    maxWidth='container.lg'
  >
    <Image
      src='./images/fast_food_2.svg'
      alt='Fast food'
      mb='2'
      width='200px'
    />
    <Text fontSize='3xl' fontWeight='bold'>
      Cart is empty!
    </Text>
    <Text fontSize={{ base: '2xl', sm: '3xl' }}>
      Explore our meal catalog and discover our best meal!
    </Text>
  </Box>
);

const Cart = () => {
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
    <Page title='Carts'>
      <Container maxWidth='container.lg'>
        <Text fontSize='3xl'>Cart</Text>
        <Box my='10'>
          {loading ? (
            <h1>Loading...</h1>
          ) : carts && carts.length ? (
            <CartList carts={carts} />
          ) : (
            <EmptyCart />
          )}
        </Box>
      </Container>
    </Page>
  );
};

export default Cart;
