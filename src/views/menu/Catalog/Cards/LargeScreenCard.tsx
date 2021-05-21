import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Text } from '@chakra-ui/layout';
import { currencyFormatter } from 'src/utils/formatter';
import { Button } from '@chakra-ui/button';
import { FaCartPlus } from 'react-icons/fa';

export default function LargeScreenCard({ className }: { className: string }) {
  return (
    <div className={className}>
      <Box bgColor='beige' overflow='hidden'>
        <Image
          src='./images/spicy-1.jpg'
          height='200px'
          transition='all 0.5s ease-out'
          _hover={{ transform: 'scale(1.1)' }}
        />
        <Box p='2'>
          <Text fontSize='2xl' fontWeight='bold'>
            Eba and Fufu
          </Text>
          <Text>{currencyFormatter(200)}</Text>
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
