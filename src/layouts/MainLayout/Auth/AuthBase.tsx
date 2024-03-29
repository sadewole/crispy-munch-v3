import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/modal';
import { Tab, TabList, Tabs } from '@chakra-ui/tabs';
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

type closeFunc = () => void;

type Props = { isOpen: boolean; onClose: closeFunc };

const AuthBase = ({ isOpen, onClose }: Props) => {
  const [tab, setTab] = useState<number>(0);

  const tabs = [
    { label: 'Login', value: 'login' },
    { label: 'Register', value: 'register' },
  ];

  const handleTabs = (value: number): void => {
    setTab(value);
  };
  const handleClose = (): void => {
    onClose();
    setTab(0);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <Tabs
          isFitted
          variant='enclosed'
          onChange={handleTabs}
          defaultValue={tab}
        >
          <TabList mb='1em'>
            {tabs.map((tab) => (
              <Tab value={tab.value} key={tab.value}>
                {tab.label}
              </Tab>
            ))}
          </TabList>
        </Tabs>
        {tab === 0 && <Login handleClose={handleClose} />}
        {tab === 1 && <Register handleClose={handleClose} />}
      </ModalContent>
    </Modal>
  );
};

export default AuthBase;
