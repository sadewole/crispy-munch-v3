import React from 'react';
import { CartList } from 'src/utils/models';
import { Box, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Spinner } from '@chakra-ui/spinner';
import { currencyFormatter } from 'src/utils/formatter';

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
    <Image src='/images/fast_food_2.svg' alt='Fast food' mb='2' width='200px' />
    <Text fontSize='2xl' fontWeight='bold'>
      Cart is empty!
    </Text>
    <Text fontSize={{ base: 'xl' }}>
      Explore our meal catalog and discover our best meal!
    </Text>
  </Box>
);

const OpenOrder = ({
  carts,
  loading,
}: {
  carts: Array<CartList>;
  loading: boolean;
}) => {
  return (
    <div>
      {loading && !carts.length ? (
        <Box mt='4' display='flex' alignItems='center' justifyContent='center'>
          <Spinner speed='1s' size='lg' color='red.500' thickness='4px' />
        </Box>
      ) : carts.length ? (
        carts.map(({ cart, food }, index: number) => (
          <Box p='3' key={index}>
            <Box display='flex' alignItems='flex-start'>
              <Image
                width='70px'
                height='70px'
                mr='2'
                src={food.image}
                alt={food.name}
              />
              <Box ml='6'>
                <Text fontSize='lg' fontWeight='semibold'>
                  {food.name}
                </Text>
                <Text color='gray.500'>
                  Qty: <b>{cart.quantity}</b>
                </Text>
                <Text color='gray.500'>
                  Total price: <b>{currencyFormatter(cart.amount)}</b>
                </Text>
              </Box>
            </Box>
          </Box>
        ))
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default OpenOrder;
