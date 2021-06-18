import { Box } from '@chakra-ui/layout';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Image,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import React, { FC } from 'react';
import { Props } from './model';

import { currencyFormatter } from 'src/utils/formatter';

const LargeScreen: FC<Props> = ({
  carts,
  updateCart,
  handleOpen,
  className,
}) => {
  return (
    <Box
      className={className}
      bgColor='beige'
      overflow='hidden'
      borderRadius='base'
      p='4'
    >
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Food Item</Th>
            <Th>Quantity</Th>
            <Th>Remove</Th>
            <Th>Unit Price</Th>
            <Th>Subtotal</Th>
          </Tr>
        </Thead>
        <Tbody>
          {carts.map(({ cart, food }, index: number) => (
            <Tr key={index}>
              <Td display='flex' alignItems='center'>
                <Image
                  width='50px'
                  height='50px'
                  mr='2'
                  src={food.image}
                  alt={food.name}
                />
                {food.name}
              </Td>
              <Td>
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
              </Td>
              <Td>
                <IconButton
                  aria-label='Delete item'
                  color='red'
                  onClick={() => handleOpen(cart, food)}
                >
                  <FaTrash />
                </IconButton>
              </Td>
              <Th>{currencyFormatter(food.price)}</Th>
              <Th>{currencyFormatter(cart.amount)}</Th>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default LargeScreen;
