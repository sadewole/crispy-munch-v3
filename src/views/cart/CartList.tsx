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
import React from 'react';

import { Cart } from 'src/utils/models';
import { currencyFormatter } from 'src/utils/formatter';

const CartList = ({ carts }: { carts: Array<Cart> }) => {
  return (
    <Box>
      <Box bgColor='beige' overflow='hidden' borderRadius='base' p='4'>
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
            {carts.map((cart) => (
              <Tr key={cart._id}>
                <Td display='flex' alignItems='center'>
                  <Image width='50px' height='50px' mr='2' />
                  inches
                </Td>
                <Td>millimetres (mm)</Td>
                <Td>
                  <IconButton aria-label='Delete item' color='red'>
                    <FaTrash />
                  </IconButton>
                </Td>
                <Th>{currencyFormatter(cart.amount)}</Th>
                <Th>Subtotal</Th>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default CartList;
