import React, { useEffect, useState } from 'react';
import {
  useParams,
  NavLink as RouterLink,
  useLocation,
} from 'react-router-dom';
import Page from 'src/components/Page';
import { Box } from '@chakra-ui/layout';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { useAuth } from 'src/context/authContext';
import { orderPaymentHistory, fetchCart } from 'src/slices/order';
import { useDispatch, useSelector } from 'src/store';
import OrderHistory from './OrderHistory';
import OpenOrder from './OpenOrder';

const Order = () => {
  const { labelId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { paymentHistories, carts, loading } = useSelector(
    // @ts-ignore
    (state) => state.order
  );
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const [tab, setTab] = useState<number>(0);
  const [tabs, setTabs] = useState([
    {
      label: 'Order History',
      href: '/customer/order/order-history',
      index: 0,
    },
    {
      label: 'Open Order',
      href: '/customer/order/cart',
      index: 1,
    },
  ]);

  useEffect(() => {
    tabs.map((tab) => {
      if (tab.href === location.pathname) {
        setTab(tab.index);
      }
    });
  }, [location, tabs]);

  useEffect(() => {
    dispatch(orderPaymentHistory());
    dispatch(fetchCart());
  }, [dispatch, isAuthenticated]);

  const handleTabs = (value: number): void => {
    setTab(value);
  };

  return (
    <Page title='Customer Orders'>
      <Box p='2'>
        <Tabs onChange={handleTabs} defaultIndex={tab} colorScheme='red'>
          <TabList mb='1em'>
            {tabs.map((tab) => (
              <Tab key={tab.index} as={RouterLink} to={tab.href}>
                {tab.label}
              </Tab>
            ))}
          </TabList>
        </Tabs>
        {labelId === 'order-history' && (
          <OrderHistory paymentHistories={paymentHistories} loading={loading} />
        )}
        {labelId === 'cart' && <OpenOrder carts={carts} loading={loading} />}
      </Box>
    </Page>
  );
};

export default Order;
