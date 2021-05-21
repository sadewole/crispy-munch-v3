import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Text } from '@chakra-ui/layout';
import { currencyFormatter } from 'src/utils/formatter';
import { Button } from '@chakra-ui/button';
import { FaCartPlus } from 'react-icons/fa';

export default function MobileCard({ className }: { className: string }) {
  return (
    <div className={className}>
      <Box bgColor='beige' display='flex' borderRadius='lg'>
        <Image src='./images/spicy-1.jpg' minHeight='100px' maxWidth='40%' />
        <Box p='2' flexGrow={1} minWidth='200px'>
          <Text fontSize='lg' fontWeight='bold'>
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
