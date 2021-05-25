import { Button } from '@chakra-ui/button';
import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import { Navigate } from 'react-router-dom';
import axios from 'src/utils/axios';

type PaymentProps = {
  user: any;
  carts: any;
  editProfile: boolean;
};

const Payment: React.FC<PaymentProps> = ({ carts, user, editProfile }) => {
  const total = carts.reduce((a: number, b: any) => a + b?.cart?.amount, 0);
  const config = {
    reference: new Date().getTime(),
    email: user.email,
    amount: total + 100,
    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
  };

  const onSuccess = (reference: any) => {
    console.log(reference);
    axios.post('order/payment').then(() => {
      <Navigate to='/menu' />;
    });
  };

  const onClose = () => {
    console.log('closed');
  };
  // @ts-ignore
  const initializePayment = usePaystackPayment(config);
  return (
    <Button
      onClick={() => {
        initializePayment(onSuccess, onClose);
      }}
      disabled={editProfile}
    >
      Pay
    </Button>
  );
};

export default Payment;
