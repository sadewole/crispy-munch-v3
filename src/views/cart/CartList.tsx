import { Box, Text } from '@chakra-ui/layout';
import { Button, useToast } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'src/store';
import { updateQuantity } from 'src/slices/order';
import { CartList } from 'src/utils/models';
import { currencyFormatter } from 'src/utils/formatter';
import PermissionModal from './PermissionModal';
import LargeScreen from './MediaQuery/LargeScreen';
import MobileScreen from './MediaQuery/MobileScreen';

const CartLists = ({ carts }: { carts: Array<CartList> }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [removeItem, setRemoveItem] = React.useState({
    id: '',
    name: '',
  });
  const toast = useToast();
  const dispatch = useDispatch();

  const updateCart = async (id: string, quantity: number) => {
    const responseMessage = await dispatch(updateQuantity(id, quantity));
    if (responseMessage) {
      toast({
        position: 'top-right',
        description: responseMessage,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const total = carts.reduce((a, b) => a + b.cart.amount, 0);

  const handleClose = () => {
    setIsOpen(false);
    setRemoveItem({
      id: '',
      name: '',
    });
  };
  const handleOpen = (cart: any, food: any) => {
    setRemoveItem({
      id: cart._id,
      name: food.name,
    });

    setIsOpen(true);
  };

  return (
    <Box>
      <LargeScreen
        carts={carts}
        updateCart={updateCart}
        handleOpen={handleOpen}
        className='smHidden'
      />
      <MobileScreen
        carts={carts}
        updateCart={updateCart}
        handleOpen={handleOpen}
        className='mdHidden'
      />
      <Box my='10' float='right'>
        <Text fontSize='3xl'>Total: {currencyFormatter(total)}</Text>
        <Button colorScheme='red' as={RouterLink} to='/cart/review'>
          Proceed to checkout
        </Button>
      </Box>
      <PermissionModal
        isOpen={isOpen}
        onClose={handleClose}
        removeItem={removeItem}
      />
    </Box>
  );
};

export default CartLists;
