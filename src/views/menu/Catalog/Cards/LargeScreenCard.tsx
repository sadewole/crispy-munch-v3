import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Text } from '@chakra-ui/layout';
import { Badge, useToast } from '@chakra-ui/react';
import { currencyFormatter } from 'src/utils/formatter';
import { Button } from '@chakra-ui/button';
import { FaCartPlus } from 'react-icons/fa';
import axios from 'src/utils/axios';
import { useAuth } from 'src/context/authContext';

import { Meal } from 'src/utils/models';

interface CardProps {
  className: string;
  meal: Meal;
}

export default function LargeScreenCard({ className, meal }: CardProps) {
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const toast = useToast();

  const placeOrder = (mealId: string) => {
    if (isAuthenticated) {
      axios
        .post('order', { mealId, quantity: 1 })
        .then(() =>
          toast({
            position: 'top-right',
            description: 'Added to cart',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        )
        .catch(console.log);
    } else {
      toast({
        position: 'top',
        description: 'Kindly login',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className={className}>
      <Box bgColor='beige' overflow='hidden'>
        <Image
          src={meal.image}
          fallbackSrc='https://via.placeholder.com/300'
          height='200px'
          transition='all 0.5s ease-out'
          _hover={{ transform: 'scale(1.1)' }}
        />
        <Box p='2'>
          <Text fontSize='2xl' fontWeight='bold'>
            {meal.name}
          </Text>
          {!meal.available && (
            <Badge my='1' colorScheme='red'>
              Not available
            </Badge>
          )}
          <Text>{currencyFormatter(meal.price)}</Text>
          <Button
            leftIcon={<FaCartPlus />}
            bgColor='red.800'
            _hover={{ bg: 'red.900' }}
            color='white'
            mt='4'
            size='sm'
            onClick={() => placeOrder(meal._id)}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </div>
  );
}
