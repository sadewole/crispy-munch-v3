import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Text } from '@chakra-ui/layout';
import { Badge } from '@chakra-ui/react';
import { currencyFormatter } from 'src/utils/formatter';
import { Button } from '@chakra-ui/button';
import { FaCartPlus } from 'react-icons/fa';

import { Meal } from '../models';

interface CardProps {
  className: string;
  meal: Meal;
}

export default function MobileCard({ className, meal }: CardProps) {
  return (
    <div className={className}>
      <Box bgColor='beige' display='flex' borderRadius='lg'>
        <Image src={meal.image} minHeight='100px' maxWidth='40%' />
        <Box p='2' flexGrow={1} minWidth='200px'>
          <Text fontSize='lg' fontWeight='bold'>
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
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </div>
  );
}
