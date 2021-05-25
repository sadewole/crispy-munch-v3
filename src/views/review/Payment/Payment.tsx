import { Button } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import { Navigate } from 'react-router-dom';
import axios from 'src/utils/axios';
import { currencyFormatter } from 'src/utils/formatter';

type PaymentProps = {
  user: any;
  carts: any;
  editProfile: boolean;
};

const Payment: React.FC<PaymentProps> = ({ carts, user, editProfile }) => {
  const total = carts.reduce((a: number, b: any) => a + b?.cart?.amount, 0);
  const config = {
    reference: new Date().getTime(),
    email: user?.email,
    amount: (total + 100) * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
  };

  const onSuccess = (reference: any) => {
    console.log(reference);
    axios.post('order/payment').then(() => {
      console.log('payment successfully');
    });
    return <Navigate to='/menu' />;
  };

  const onClose = () => {
    console.log('closed');
  };
  // @ts-ignore
  const initializePayment = usePaystackPayment(config);
  return (
    <Box my='4'>
      <Box>
        <Box display='flex' alignItems='center'>
          <Text fontSize='lg' width='40' mr='2'>
            Total order:
          </Text>
          <Text fontSize='lg' fontWeight='bold'>
            {currencyFormatter(total)}
          </Text>
        </Box>
        <Box display='flex' alignItems='center'>
          <Text fontSize='lg' width='40' mr='2'>
            Tax:
          </Text>
          <Text fontSize='lg' fontWeight='bold'>
            {currencyFormatter(100)}
          </Text>
        </Box>
        <Box display='flex' alignItems='center'>
          <Text fontSize='lg' width='40' mr='2'>
            Total order + Tax:
          </Text>
          <Text fontSize='lg' fontWeight='bold'>
            {currencyFormatter(total + 100)}
          </Text>
        </Box>
      </Box>
      <Button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
        disabled={editProfile}
        width='full'
        colorScheme='red'
        my='4'
      >
        Pay
      </Button>
    </Box>
  );
};

export default Payment;
