import { Box, Text } from '@chakra-ui/layout';
import { IconButton, Image, Button, Divider, useToast } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import React, { FC } from 'react';
import { Props } from './model';
import { currencyFormatter } from 'src/utils/formatter';

const MobileScreen: FC<Props> = ({
  carts,
  updateCart,
  handleOpen,
  className,
}) => {
  return (
    <div className={className}>
      {carts.map(({ cart, food }, index: number) => (
        <Box
          key={index}
          bgColor='beige'
          overflow='hidden'
          borderRadius='base'
          p='4'
          mb='4'
        >
          <Box display='flex' alignItems='flex-start'>
            <Image width='50px' height='50px' mr='2' src={food.image} />
            <Box>
              <Text fontSize='lg'>{food.name}</Text>
              <Text fontSize=''>{currencyFormatter(cart.amount)}</Text>
            </Box>
          </Box>
          <Divider my='2' />
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            width='full'
            my='2'
          >
            <Button
              leftIcon={<FaTrash />}
              colorScheme='red'
              onClick={() => handleOpen(cart, food)}
            >
              Remove
            </Button>
            <Box display='flex' alignItems='center'>
              <IconButton
                aria-label='Decrease item quantity'
                variant='outline'
                colorScheme='red'
                size='sm'
                onClick={() => updateCart(cart._id, cart.quantity - 1)}
                disabled={cart.quantity === 1}
              >
                <span>-</span>
              </IconButton>
              <Box p='2'>{cart.quantity}</Box>
              <IconButton
                aria-label='increase item quantity'
                variant='outline'
                colorScheme='red'
                size='sm'
                onClick={() => updateCart(cart._id, cart.quantity + 1)}
              >
                <span>+</span>
              </IconButton>
            </Box>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default MobileScreen;
