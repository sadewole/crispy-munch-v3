import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react';

import { useDispatch } from 'src/store';
import { removeOrder } from 'src/slices/order';

type closeFunc = () => void;

type Props = { isOpen: boolean; onClose: closeFunc; removeItem: any };

const PermissionModal = ({ isOpen, onClose, removeItem }: Props) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const dispatch = useDispatch();

  const deleteOrder = async (id: string) => {
    setIsSubmitting(true);
    await dispatch(removeOrder(id));
    setIsSubmitting(false);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize='lg' mb='4'>
            Are you sure you want to delete this order{' '}
            <b>({removeItem.name})</b> from your cart?
          </Text>
          <Button
            colorScheme='red'
            onClick={() => deleteOrder(removeItem.id)}
            width='full'
            isLoading={isSubmitting}
          >
            Remove from cart
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PermissionModal;
