import { Box, Text } from '@chakra-ui/layout';
import { Image, Table, Tr, Td } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CartList } from 'src/utils/models';
import { currencyFormatter } from 'src/utils/formatter';

type SummaryProps = {
  carts: Array<CartList>;
  loading: boolean;
};

const Summary: FC<SummaryProps> = ({ carts, loading }) => {
  return (
    <Box my='4'>
      <Text fontWeight='bold' fontSize='2xl' mb='2'>
        Order Summary
      </Text>
      <Box bgColor='beige' overflow='hidden' borderRadius='base' p='3'>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <Table>
            {carts.map(({ cart, food }, index: number) => (
              <Tr key={index}>
                <Td display='flex' alignItems='center' flexWrap='wrap'>
                  <Image width='50px' height='50px' mr='2' src={food.image} />
                  {food.name}
                </Td>
                <Td>
                  <Text p='2' border='red 1px solid' width='fit-content'>
                    {cart.quantity}
                  </Text>
                </Td>
                <Td fontSize='lg'>{currencyFormatter(cart.amount)}</Td>
              </Tr>
            ))}
          </Table>
        )}
      </Box>
    </Box>
  );
};

export default Summary;
