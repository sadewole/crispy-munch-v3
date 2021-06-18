import { Image } from '@chakra-ui/image';
import { Badge, Box, Divider, Text } from '@chakra-ui/layout';
import React, { FC } from 'react';
import { dateFormatter, currencyFormatter } from 'src/utils/formatter';

import { paymentHistory } from 'src/utils/models';

const CardOrder: FC<paymentHistory> = ({ orders, paymentDate, status }) => {
  return (
    <Box border='1px' borderColor='gray.400' borderRadius='10px' mb='4'>
      <Box p='3'>
        <Badge variant='solid' colorScheme='green'>
          {status}
        </Badge>
        <Text fontWeight='bold'>{dateFormatter(paymentDate)}</Text>
      </Box>
      <Divider />
      {orders.map(({ order, food }, index: number) => (
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
                Qty: <b>{order.quantity}</b>
              </Text>
              <Text color='gray.500'>
                Total price: <b>{currencyFormatter(order.amount)}</b>
              </Text>
            </Box>
          </Box>
          {orders.length - 1 !== index && <Divider />}
        </Box>
      ))}
    </Box>
  );
};

export default CardOrder;
