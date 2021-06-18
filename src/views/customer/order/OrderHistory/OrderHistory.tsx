import { Box, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import React, { FC } from 'react';
import { Spinner } from '@chakra-ui/spinner';

import { paymentHistory } from 'src/utils/models';
import CardOrder from './CardOrder';

type orderPaymentHistoryProps = {
  paymentHistories: paymentHistory[];
  loading: boolean;
};

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
      src='/images/order-history.svg'
      alt='Order history'
      mb='2'
      width='200px'
    />
    <Text fontSize='3xl' fontWeight='bold'>
      You have no payment history yet.
    </Text>
    <Text fontSize={{ base: '2xl', sm: '3xl' }}>
      Explore our meal catalog and discover our best meal!
    </Text>
  </Box>
);

const OrderHistory: FC<orderPaymentHistoryProps> = ({
  paymentHistories,
  loading,
}) => {
  return (
    <Box my='2'>
      {loading && !paymentHistories.length ? (
        <Box mt='4' display='flex' alignItems='center' justifyContent='center'>
          <Spinner speed='1s' size='lg' color='red.500' thickness='4px' />
        </Box>
      ) : paymentHistories.length ? (
        paymentHistories.map((payment) => (
          <CardOrder {...payment} key={payment.id} />
        ))
      ) : (
        <EmptyCart />
      )}
    </Box>
  );
};

export default OrderHistory;
